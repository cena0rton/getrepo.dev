export const dynamic = "force-dynamic";

const GITHUB_API = "https://api.github.com";

type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  open_issues_count: number;
  forks_count: number;
  owner: { login: string; avatar_url: string; html_url: string };
  language: string | null;
  topics?: string[];
};

type SearchResponse = {
  total_count: number;
  items: GitHubRepo[];
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || "";
    const language = searchParams.get("language");
    const sort = searchParams.get("sort") || "stars"; // stars | forks | updated
    const order = searchParams.get("order") || "desc"; // desc | asc
    const perPage = searchParams.get("per_page") || "50";
    const page = searchParams.get("page") || "1";
    const token = process.env.GITHUB_TOKEN;
    
    // Build dynamic qualifiers - more specific search
    const base = q.trim() ? `${q} in:name,description` : "";
    const qualifiers = [
      "is:public",
      "archived:false",
      "good-first-issues:>0",
      language ? `language:${language}` : "",
    ]
      .filter(Boolean)
      .join(" ");

    const url = new URL(`${GITHUB_API}/search/repositories`);
    url.searchParams.set("q", [base, qualifiers].filter(Boolean).join(" "));
    // Use relevance sorting when there's a search query, otherwise use the specified sort
    const searchSort = q.trim() ? "best-match" : sort;
    url.searchParams.set("sort", searchSort);
    url.searchParams.set("order", order);
    url.searchParams.set("per_page", perPage);
    url.searchParams.set("page", page);

    const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
    if (token) headers.Authorization = `Bearer ${token}`;
    headers["X-GitHub-Api-Version"] = "2022-11-28";

    const res = await fetch(url.toString(), { headers, next: { revalidate: 0 } });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`GitHub API error ${res.status}: ${text}`);
    }
    const data: SearchResponse = await res.json();

    // Shuffle results for variety on reload (only if no specific query)
    let repos = data.items;
    if (!q.trim() && page === "1") {
      repos = shuffleArray([...data.items]);
    }

    return new Response(JSON.stringify({ total: data.total_count, repos, page: Number(page), per_page: Number(perPage) }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}


