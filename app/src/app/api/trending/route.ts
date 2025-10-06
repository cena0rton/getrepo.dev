export const dynamic = "force-dynamic";

const GITHUB_API = "https://api.github.com";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const language = searchParams.get("language");
    const perPage = searchParams.get("per_page") || "50";
    // Trending approximation: repos with many stars created in last 14 days
    const since = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 50);
    const qualifiers = [
      `created:>${since}`,
      "is:public",
      "archived:false",
      language ? `language:${language}` : "",
    ]
      .filter(Boolean)
      .join(" ");

    const url = new URL(`${GITHUB_API}/search/repositories`);
    url.searchParams.set("q", qualifiers);
    url.searchParams.set("sort", "stars");
    url.searchParams.set("order", "desc");
    url.searchParams.set("per_page", perPage);

    const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
    const token = process.env.GITHUB_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;
    headers["X-GitHub-Api-Version"] = "2022-11-28";

    const res = await fetch(url.toString(), { headers, next: { revalidate: 0 } });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`GitHub API error ${res.status}: ${text}`);
    }
    const data = await res.json();
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


