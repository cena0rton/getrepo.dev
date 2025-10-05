"use client";

import { useEffect, useState } from "react";
import Loader from "./ui/Loader";
import Image from "next/image";

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
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);

  const debouncedQuery = useDebouncedValue(query, 400);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const url = new URL("/api/repos", window.location.origin);
        if (debouncedQuery) url.searchParams.set("q", debouncedQuery);
        const res = await fetch(url.toString());
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Failed to load");
        if (!cancelled) setRepos(data.repos ?? []);
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
  }, [debouncedQuery]);

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
    if (!language) return "bg-neutral-100 border-1 border-neutral-200 bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100";
    const key = language.toLowerCase();
    return languageToClass[key] || "bg-neutral-100";
  }

  return (
    <div className="w-full h-screen   mx-auto p-4 space-y-4 border-t border-neutral-100/20 dark:border-neutral-800 flex-1">
     
     <div className="relative">
        <div className="flex flex-col gap-4 ">
      
      <h1 className="text-2xl font-medium tracking-tight">GitHub Repos with Issues (Under Production)</h1>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics or keywords (e.g. nextjs, express, typescript)"
          className="w-full border rounded px-3 py-2"
        />
        </div>
      </div>
      {loading && <Loader/>}
      {error && <p className="text-red-600 dark:text-red-400">{error}</p>}
      <div className=" h-screen scroll-smooth">
        <table className="w-full text-sm text-neutral-800 dark:text-neutral-200">
          <thead className="sticky top-0 bg-white/80 dark:bg-neutral-900/60 backdrop-blur border-b border-neutral-200 dark:border-neutral-100">
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
                <td className="py-2 px-2  max-w-20">
                  <span className={`rounded-xl px-2 border-1 ${getLanguageClass(r.language)}`}>
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
            {!loading && !error && repos.length === 0 && (
              <tr>
                <td colSpan={6} className="py-6 text-center text-neutral-600 dark:text-neutral-400">No results yet. Try a search.</td>
              </tr>
            )}
          </tbody>
        </table>
      
      </div>
      
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

