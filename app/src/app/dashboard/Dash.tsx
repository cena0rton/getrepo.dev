"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SkeletonLoader from "../components/ui/SkeletonLoader";
import Image from "next/image";
import Link from "next/link";

type Repo = {
  id: number;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  open_issues_count: number;
  owner: { login: string; avatar_url: string };
  language: string | null;
  forks_count?: number;
  topics?: string[];
};

export default function Dash() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  
  const [query, setQuery] = useState(initialSearch);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [language, setLanguage] = useState<string>("");
  const [sort, setSort] = useState<string>("stars");
  const [order, setOrder] = useState<string>("desc");
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(20);
  const [total, setTotal] = useState<number>(0);

  const debouncedQuery = useDebouncedValue(query, 400);

  // Update query when search param changes
  useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    if (urlSearch !== query) {
      setQuery(urlSearch);
    }
  }, [searchParams]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const url = new URL("/api/repos", window.location.origin);
        if (debouncedQuery) url.searchParams.set("q", debouncedQuery);
        if (language) url.searchParams.set("language", language);
        if (sort) url.searchParams.set("sort", sort);
        if (order) url.searchParams.set("order", order);
        url.searchParams.set("per_page", String(perPage));
        url.searchParams.set("page", String(page));
        const res = await fetch(url.toString());
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Failed to load");
        if (!cancelled) {
          setRepos(data.repos ?? []);
          setTotal(Number(data.total || 0));
        }
      } catch (e: unknown) {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Something went wrong");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [debouncedQuery, language, sort, order, page, perPage]);

  const languageToClass: Record<string, string> = {
    python: "bg-yellow-300/50 border-yellow-300 text-yellow-600 dark:bg-yellow-900/40 dark:border-yellow-700 dark:text-yellow-200",
    typescript: "bg-blue-200/50 border-blue-200 text-blue-600 dark:bg-blue-900/40 dark:border-blue-700 dark:text-blue-400",
    "c++": "bg-purple-200/50 border-purple-200 text-purple-600 dark:bg-purple-900/40 dark:border-purple-700 dark:text-purple-200",
    c: "bg-gray-200/50 border-gray-200 text-gray-600 dark:bg-gray-800/40 dark:border-gray-700 dark:text-gray-200",
    javascript: "bg-yellow-100/50 border-yellow-300 text-yellow-600 dark:bg-yellow-900/40 dark:border-yellow-700 dark:text-yellow-200",
    go: "bg-cyan-200/50 border-cyan-200 text-cyan-600 dark:bg-cyan-900/40 dark:border-cyan-700 dark:text-cyan-200",
    java: "bg-orange-200/50 border-orange-200 text-orange-600 dark:bg-orange-900/40 dark:border-orange-700 dark:text-orange-200",
    ruby: "bg-red-200/50 border-red-200 text-red-600 dark:bg-red-900/40 dark:border-red-700 dark:text-red-200",
    rust: "bg-orange-300/50 border-orange-300 text-orange-700 dark:bg-orange-900/40 dark:border-orange-700 dark:text-orange-200",
    php: "bg-indigo-200/50 border-indigo-200 text-indigo-600 dark:bg-indigo-900/40 dark:border-indigo-700 dark:text-indigo-200",
    kotlin: "bg-pink-200/50 border-pink-200 text-pink-600 dark:bg-pink-900/40 dark:border-pink-700 dark:text-pink-200",
    swift: "bg-teal-200/50 border-teal-200 text-teal-600 dark:bg-teal-900/40 dark:border-teal-700 dark:text-teal-200",
    scala: "bg-green-200/50 border-green-200 text-green-600 dark:bg-green-900/40 dark:border-green-700 dark:text-green-200",
    shell: "bg-gray-300/50 border-gray-300 text-neutral-500 dark:bg-gray-800/40 dark:border-gray-700 dark:text-gray-200",
    "c#": "bg-violet-200/50 border-violet-200 text-violet-600 dark:bg-violet-900/40 dark:border-violet-700 dark:text-violet-200",
    dart: "bg-sky-200/50 border-sky-200 text-sky-600 dark:bg-sky-900/40 dark:border-sky-700 dark:text-sky-200",
    jupyternotebook: "bg-green-300/50 border-green-300 text-green-700 dark:bg-green-900/40 dark:border-green-700 dark:text-green-200",
    css: "bg-gray-100/50 border-gray-200 text-gray-700 dark:bg-gray-900/40 dark:border-gray-700 dark:text-gray-200",
  };

  function getLanguageClass(language: string | null): string {
    if (!language) return "bg-neutral-100 border-1 border-neutral-200 bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100";
    const key = language.toLowerCase();
    return languageToClass[key] || "bg-neutral-100";
  }

  // Helper for repo cards (mobile)
  function RepoCard({ r }: { r: Repo }) {
    return (
      <div className="border-1 border-neutral-200 dark:border-[#6366f1]/20 rounded-lg mb-3 p-4 bg-white dark:bg-neutral-900 shadow flex flex-col gap-2">
        <div className="flex items-center gap-3">
          {r.owner?.avatar_url && (
            <Image
              src={r.owner.avatar_url}
              alt={r.owner.login}
              className="size-8 rounded-full border border-neutral-200 dark:border-neutral-700"
              loading="lazy"
              width={36}
              height={36}
            />
          )}
          <div className="flex-1">
            <Link
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              className="font-medium break-all text-[#6366f1] "
            >
              {r.full_name}
            </Link>
            {r.description && (
              <div className="text-neutral-600 dark:text-neutral-400 text-xs mt-0.5 line-clamp-2">
                {r.description}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-2 mt-2 text-xs">
          <span className={`rounded-xl px-2 py-1 border-1 border-neutral-200/50 ${getLanguageClass(r.language)}`}>
            {r.language || "Unknown"}
          </span>
          {(r.topics || [])
            .slice(0, 3)
            .map((t) => (
              <span
                key={t}
                className="px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-700"
              >
                {t}
              </span>
            ))}
        </div>
        <div className="flex gap-4 text-xs mt-3 text-neutral-500 dark:text-neutral-400">
          <div className="flex gap-1 items-center " title="Stars">
           
            <span>{r.stargazers_count.toLocaleString()}</span>
          </div>
          <div className="flex gap-1 items-center" title="Open Issues">
            <svg className="size-4 stroke-current" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
            <span>{r.open_issues_count.toLocaleString()}</span>
          </div>
          <div className="flex gap-1 items-center" title="Forks">
            <svg className="size-4 stroke-current" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="6" r="3"/><path d="M6 9v6"/><path d="M6 6h6a3 3 0 0 1 3 3v3"/></svg>
            <span>{(r.forks_count ?? 0).toLocaleString()}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen mx-auto py-4 md:px-4 space-y-4 border-t border-neutral-100/20 dark:border-neutral-800 flex-1">
      <div className="relative dark:bg-[#6366f1]/40 ">
        <div className="flex flex-col gap-4 dark:bg-neutral-900 bg-neutral-50 p-4 rounded-2xl border-1 dark:border-[#6366f1]/20 border-neutral-200">
          <h1 className="text-2xl font-medium tracking-tight">
            Search for <span className="text-[#6366f1]">Repos</span> you want to contribute to
          </h1>
          <div className="flex flex-col items-center justify-between md:grid md:grid-cols-[1fr_140px_140px_120px] gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search (e.g. nextjs, express, typescript)"
              className="w-full border bg-linear-to-r from-neutral-100 to-neutral-50 dark:bg-linear-to-tr dark:from-neutral-800 dark:to-neutral-950 dark:border-[#6366f1]/40 border-neutral-200 rounded px-3 py-2 outline-none dark:text-neutral-300 text-neutral-800 focus:ring-1 focus:ring-neutral-300 dark:focus:ring-[#6366f1]/40 transition-all duration-100 placeholder:text-neutral-400 "
            />
            <div className="flex justify-start items-center md:grid md:grid-cols-[1fr_140px_140px_120px] gap-2 w-full mx-auto md:overflow-x-visible">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border dark:border-[#6366f1]/40 border-neutral-200 rounded px-2 py-2 bg-linear-to-r from-neutral-100 to-neutral-50 dark:bg-linear-to-tr dark:from-neutral-800 dark:to-neutral-950 outline-none dark:text-neutral-300 w-36 "
            >
              <option value="" className="text-neutral-300">All languages</option>
              <option value="JavaScript">JavaScript</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="Go">Go</option>
              <option value="C++">C++</option>
              <option value="C">C</option>
              <option value="Ruby">Ruby</option>
              <option value="PHP">PHP</option>
              <option value="Rust">Rust</option>
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-neutral-200 dark:border-[#6366f1]/40 rounded px-2 py-2 bg-linear-to-r from-neutral-100 to-neutral-50 dark:bg-linear-to-tr dark:from-neutral-800 dark:to-neutral-950 outline-none dark:text-neutral-300  w-36 "
            >
              <option value="stars" className="text-neutral-300">Sort: Stars</option>
              <option value="forks" className="text-neutral-300">Sort: Forks</option>
              <option value="updated">Sort: Recently Updated</option>
            </select>
            <select
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              className="border-1 border-neutral-200 dark:border-[#6366f1]/40 rounded px-2 py-2 w-24 bg-linear-to-r from-neutral-100 to-neutral-50 dark:bg-linear-to-tr dark:from-neutral-800 dark:to-neutral-950 outline-none inset-shadow-md inset-shadow-blue-400 dark:text-neutral-300 "
            >
              <option value="desc">Desc</option>
              <option value="asc">Asc</option>
            </select>
            </div>
          </div>
        </div>
      </div>

      {loading && <SkeletonLoader />}
      {error && <p className="text-red-600 dark:text-red-400">{error}</p>}

      {/* Table on md+ screens, Card list on mobile */}
      {!loading && !error && (
        <div className="h-screen scroll-smooth">
          {/* Hide table on screens < md, show on md+ */}
          <table className="w-full text-sm text-neutral-800 dark:text-neutral-200 border-1 border-neutral-200/50 dark:border-[#6366f1]/20 rounded-lg hidden md:table">
          
            <thead className="sticky top-16 bg-white/80 dark:bg-neutral-900/60 backdrop-blur border border-neutral-200 dark:border-[#6366f1]/30">
              <tr className="text-left text-[#a5a4a4]">
                <th className="py-4 px-2">Repository</th>
                <th className="py-2 px-2">Language</th>
                <th className="py-2 px-2 text-center">Tags</th>
                <th className="py-2 px-2">Stars</th>
                <th className="py-2 px-2">Issues</th>
                <th className="py-2 px-2">Forks</th>
              </tr>
            </thead>
            <tbody>
              {repos.map((r) => (
                <tr
                  key={r.id}
                  className="border-b border-neutral-100 dark:border-[#6366f1]/20 hover:bg-neutral-50 dark:hover:bg-neutral-900 group"
                >
                  <td className="py-6 px-2 max-w-sm">
                    <Link href={r.html_url} target="_blank" rel="noreferrer" key={r.id}>
                      <div className="flex items-center gap-2">
                        {r.owner?.avatar_url && (
                          <Image
                            src={r.owner.avatar_url}
                            alt={r.owner.login}
                            className="size-6 rounded-full border border-neutral-200 dark:border-neutral-700"
                            loading="lazy"
                            width={34}
                            height={34}
                          />
                        )}
                        <div>
                          <Link
                            href={r.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium group-hover:text-[#6366f1] transition-colors transition-duration-300"
                          >
                            {r.full_name}
                          </Link>
                          {r.description && (
                            <div className="text-neutral-600 dark:text-neutral-400 text-xs max-w-xl mt-0.5">
                              {r.description.slice(0, 100)}...
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="py-2 px-2  max-w-20">
                    <span className={`rounded-xl px-2 py-1 border-1 border-neutral-200/50 ${getLanguageClass(r.language)}`}>
                      {r.language || "Unknown"}
                    </span>
                  </td>
                  <td className="py-2 px-2 max-w-[24ch]">
                    <div className="flex flex-wrap gap-1">
                      {(r.topics || []).slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-full border text-xs border-neutral-200 dark:border-neutral-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-2 px-2 tabular-nums">
                    {r.stargazers_count.toLocaleString()}
                  </td>
                  <td className="py-2 px-2 tabular-nums">
                    {r.open_issues_count.toLocaleString()}
                  </td>
                  <td className="py-2 px-2 tabular-nums">
                    {(r.forks_count ?? 0).toLocaleString()}
                  </td>
                </tr>
              ))}
              {!loading && !error && repos.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="py-6 text-center text-neutral-600 dark:text-neutral-400"
                  >
                    No results yet. Try a search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {/* Card view for mobile: show on <md, hidden on md+ */}
          <div className="md:hidden">
            {repos.map((r) => (
              <RepoCard key={r.id} r={r} />
            ))}
            {!loading && !error && repos.length === 0 && (
              <div className="py-8 text-center text-neutral-600 dark:text-neutral-400">
                No results yet. Try a search.
              </div>
            )}
          </div>

          <div className="sticky bottom-0 flex items-center justify-between px-3 py-2  w-full backdrop-blur-lg">
            <div className="text-xs text-neutral-600 dark:text-neutral-400">
              Page {page} · Showing {repos.length} of {total.toLocaleString()} results
            </div>
            <div className="flex gap-2">
              <button
                className="border border-neutral-200 dark:border-neutral-700 rounded md:px-3 md:py-1 px-2 py-0 disabled:opacity-50"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1 || loading}
              >
                Prev
              </button>
              <button
                className="border group border-neutral-200 dark:border-neutral-700 rounded  md:px-3 md:py-1 px-2 py-0 disabled:opacity-50"
                onClick={() => {
                  setPage((p) => p + 1);
                }}
                disabled={loading || repos.length < perPage}
              >
                <span className="flex items-center gap-2 text-base">
                  Next
                  <svg
                 
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hidden md:block icon icon-tabler icons-tabler-outline icon-tabler-chevrons-right"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 7l5 5l-5 5" />
                    <path
                      d="M13 7l5 5l-5 5"
                      className="rotate-180 group-hover:rotate-0 transition-all duration-300"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function useDebouncedValue<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(id);
  }, [value, delayMs]);
  return debounced;
}
