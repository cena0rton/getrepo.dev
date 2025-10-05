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

async function fetchReposWithIssues(query: string, token?: string): Promise<SearchResponse> {
  const url = new URL(`${GITHUB_API}/search/repositories`);
  // Default to repos with >0 open issues, sort by issues or stars
  const q = query?.trim() ? `${query} in:name,description,readme` : "";
  const qualifiers = ["is:public", "archived:false", "good-first-issues:>0"].join(" ");
  url.searchParams.set("q", [q, qualifiers].filter(Boolean).join(" "));
  url.searchParams.set("sort", "stars");
  url.searchParams.set("order", "desc");
  url.searchParams.set("per_page", "20");

  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  headers["X-GitHub-Api-Version"] = "2022-11-28";

  const res = await fetch(url.toString(), { headers, next: { revalidate: 0 } });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`GitHub API error ${res.status}: ${text}`);
  }
  return res.json();
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || "";
    const token = process.env.GITHUB_TOKEN;
    const data = await fetchReposWithIssues(q, token);
    return new Response(JSON.stringify({ total: data.total_count, repos: data.items }), {
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


