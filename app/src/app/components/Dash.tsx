"use client";

import { useEffect, useState } from "react";

type Repo = {
  id: number;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  open_issues_count: number;
  owner: { login: string; avatar_url: string };
  language: string | null;
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
    python: "bg-yellow-300/50 border-yellow-300 text-yellow-600",
    typescript: "bg-blue-200/50 border-blue-200 text-blue-600",
    "c++": "bg-purple-200/50 border-purple-200 text-purple-600",
    c: "bg-gray-200/50 border-gray-200 text-gray-600",
    javascript: "bg-yellow-100/50 border-yellow-300 text-yellow-600",
    go: "bg-cyan-200/50 border-cyan-200 text-cyan-600",
    java: "bg-orange-200/50 border-orange-200 text-orange-600",
    ruby: "bg-red-200/50 border-red-200 text-red-600",
    rust: "bg-orange-300/50 border-orange-300 text-orange-700",
    php: "bg-indigo-200/50 border-indigo-200 text-indigo-600",
    kotlin: "bg-pink-200/50 border-pink-200 text-pink-600",
    swift: "bg-teal-200/50 border-teal-200 text-teal-600",
    scala: "bg-green-200/50 border-green-200 text-green-600",
    shell: "bg-gray-300/50 border-gray-300 text-gray-700",
  };

  function getLanguageClass(language: string | null): string {
    if (!language) return "bg-neutral-100 border-1 border-neutral-200";
    const key = language.toLowerCase();
    return languageToClass[key] || "bg-neutral-100";
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-medium tracking-tight">GitHub Repos with Issues (Under Production)</h1>
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics or keywords (e.g. nextjs, express, typescript)"
          className="flex-1 border rounded px-3 py-2"
        />
      </div>
      {loading && <p>Loading…</p>}
      {error && <p className="text-red-600">{error}</p>}
      <ul className="space-y-3">
        {repos.map((r) => (
          <li key={r.id} className=" rounded p-3 shadow-sm">
            <div className="flex items-center justify-between">
            <a href={r.html_url} target="_blank" rel="noreferrer" className="font-medium underline ">
              {r.full_name} 
            </a>
            <span className={`rounded-xl underline-offset-0 px-2 border-1 text-sm ${getLanguageClass(r.language)}`}>
                {r.language || "Unknown"}
              </span>
            </div>
            <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
              <span> Stars: {r.stargazers_count} · Issues: {r.open_issues_count}</span>
              
            </div>
            {r.description && <p className="text-sm mt-1">{r.description}</p>}
          </li>
        ))}
        {!loading && !error && repos.length === 0 && (
          <li className="text-sm text-gray-600">No results yet. Try a search.</li>
        )}
      </ul>
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

