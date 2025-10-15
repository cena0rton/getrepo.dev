"use client";
import React, { useEffect, useState } from "react";
import SkeletonLoader from "../components/ui/SkeletonLoader";
import Image from "next/image";
export const dynamic = "force-dynamic";

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

async function fetchTrending(language?: string, sort?: string, order?: string) {
  try {
    const base =
      typeof window !== "undefined"
        ? window.location.origin
        : "http://localhost:3000";
    const url = new URL("/api/trending", base);
    if (language) url.searchParams.set("language", language);
    if (sort) url.searchParams.set("sort", sort);
    if (order) url.searchParams.set("order", order);
    const res = await fetch(url.toString(), { cache: "no-store" });
    if (!res.ok) {
      return { repos: [], error: "Failed to load trending repos" };
    }
    return await res.json();
  } catch {
    return { repos: [], error: "Failed to load trending repos" };
  }
}

export default function TrendingPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>("");
  const [sort, setSort] = useState<string>("stars");
  const [order, setOrder] = useState<string>("desc");

  const debouncedLanguage = useDebouncedValue(language, 400);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchTrending(debouncedLanguage, sort, order).then((data) => {
      if (!mounted) return;
      if (data.error) {
        setError(data.error);
        setRepos([]);
      } else {
        setRepos(data?.repos ?? []);
        setError(null);
      }
      setLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, [debouncedLanguage, sort, order]);

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
    shell: "bg-gray-300/50 border-gray-300 text-gray-700 dark:bg-gray-800/40 dark:border-gray-700 dark:text-gray-200",
  };

  function getLanguageClass(language: string | null): string {
    if (!language) return "bg-neutral-100 border-1 border-neutral-200/50 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100";
    const key = language.toLowerCase();
    return languageToClass[key] || "bg-neutral-100";
  }

  // Helper for repo cards (mobile)
  function RepoCard({ r }: { r: Repo }) {
    return (
      <div className="border-1 border-neutral-200 dark:border-neutral-700 rounded-lg mb-3 p-4 bg-white dark:bg-neutral-900 shadow flex flex-col gap-2">
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
            <a
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              className="font-medium break-all text-[#6366f1]"
            >
              {r.full_name}
            </a>
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
    <section id="trending">
      <div className="w-full h-screen mx-auto py-4 md:px-4 space-y-4 border-t border-neutral-100/20 dark:border-neutral-800 flex-1">
       
      <h1 className="md:hidden text-2xl font-medium tracking-tight text-left">Top 50 <span className="text-[#6366f1]">Trending Repositories</span> on Github</h1>
        <div className="flex md:justify-between justify-start items-center gap-2">
          <div className="hidden md:block">
        <h1 className=" text-2xl font-medium tracking-tight">Top 50 <span className="text-[#6366f1]">Trending Repositories</span> on Github</h1>
        </div>
        <div className="flex gap-2 overflow-x-hidden">
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border border-neutral-100 dark:border-neutral-800 rounded px-2 py-2 bg-linear-to-r from-neutral-100 to-neutral-50 dark:bg-linear-to-tr dark:from-neutral-800 dark:to-neutral-950 outline-none">
            <option value="">All languages</option>
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
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="border w-36 md:w-full border-neutral-100 dark:border-neutral-800 rounded px-2 py-2 bg-linear-to-r from-neutral-100 to-neutral-50 dark:bg-linear-to-tr dark:from-neutral-800 dark:to-neutral-950 outline-none">
            <option value="stars">Sort: Stars</option>
            <option value="forks">Sort: Forks</option>
            <option value="updated">Sort: Recently Updated</option>
          </select>
          <select value={order} onChange={(e) => setOrder(e.target.value)} className="border border-neutral-100 dark:border-neutral-800 rounded px-2 py-2 bg-linear-to-r from-neutral-100 to-neutral-50 dark:bg-linear-to-tr dark:from-neutral-800 dark:to-neutral-950 outline-none">
            <option value="desc">Desc</option>
            <option value="asc">Asc</option>
          </select>
          </div>
        </div>

        {loading && <SkeletonLoader/>}
        {error && <p className="text-red-600 dark:text-red-400">{error}</p>}

        {!loading && !error && (
          <div className="h-screen scroll-smooth">
            {/* Hide table on screens < md, show on md+ */}
            <table className="w-full text-sm text-neutral-800 dark:text-neutral-200 border-1 border-neutral-200/50 dark:border-neutral-700/50 rounded-lg hidden md:table">
              <thead className="sticky top-16 bg-white/80 dark:bg-neutral-900/60 backdrop-blur border-b border-neutral-200 dark:border-neutral-700">
                <tr className="text-left">
                  <th className="py-4 px-2">Repository</th>
                  <th className="py-2 px-2">Language</th>
                  <th className="py-2 px-2">Tags</th>
                  <th className="py-2 px-2">Stars</th>
                  <th className="py-2 px-2">Issues</th>
                  <th className="py-2 px-2">Forks</th>
                </tr>
              </thead>
              <tbody>
                {repos.map((r) => (
                  <tr key={r.id} className="border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 group">
                    <td className="py-6 px-2 max-w-sm">
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
                          <a href={r.html_url} target="_blank" rel="noreferrer" className="font-medium underline group-hover">
                            {r.full_name}
                          </a>
                          {r.description && <div className="text-neutral-600 dark:text-neutral-400 text-xs max-w-xl mt-0.5">{r.description}</div>}
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-2 max-w-20">
                      <span className={`rounded-xl px-2 py-1 border-1 border-neutral-200/50 ${getLanguageClass(r.language)}`}>
                        {r.language || "Unknown"}
                      </span>
                    </td>
                    <td className="py-2 px-2 max-w-[24ch]">
                      <div className="flex flex-wrap gap-1">
                        {(r.topics || []).slice(0, 4).map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-full border text-xs border-neutral-200 dark:border-neutral-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-2 px-2 tabular-nums">{r.stargazers_count.toLocaleString()}</td>
                    <td className="py-2 px-2 tabular-nums">{r.open_issues_count.toLocaleString()}</td>
                    <td className="py-2 px-2 tabular-nums">{(r.forks_count ?? 0).toLocaleString()}</td>
                  </tr>
                ))}
                {repos.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-6 text-center text-neutral-600 dark:text-neutral-400">
                      No trending repositories found.
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
              {repos.length === 0 && (
                <div className="py-8 text-center text-neutral-600 dark:text-neutral-400">
                  No trending repositories found.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
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
