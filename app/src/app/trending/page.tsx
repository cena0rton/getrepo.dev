/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import Loader from "../components/ui/Loader";
export const dynamic = "force-dynamic";

async function fetchTrending(language?: string) {
  try {
    const base =
      typeof window !== "undefined"
        ? window.location.origin
        : "http://localhost:3000";
    const url = new URL("/api/trending", base);
    if (language) url.searchParams.set("language", language);
    const res = await fetch(url.toString(), { cache: "no-store" });
    if (!res.ok) {
      return { repos: [], error: "Failed to load trending repos" };
    }
    return await res.json();
  } catch (e) {
    return { repos: [], error: "Failed to load trending repos" };
  }
}

export default function TrendingPage() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchTrending().then((data) => {
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
  }, []);

  return (
    <section id="trending">
      <div className="w-full h-screen mx-auto p-4 space-y-4 border-t border-neutral-100/20 dark:border-neutral-800 flex-1">
        <h1 className="text-2xl font-medium tracking-tight">Trending Repositories</h1>
        <div className="grid grid-cols-1 gap-3">
          {loading && (
           <Loader/>
          )}
          {!loading && error && (
            <div className="text-red-600 dark:text-red-400">{error}</div>
          )}
          {!loading && !error && (
            <div className="h-screen scroll-smooth">
              <table className="w-full text-sm text-neutral-800 dark:text-neutral-200">
                <thead className="sticky top-0 bg-white/80 dark:bg-neutral-900/60 backdrop-blur border-b border-neutral-200 dark:border-neutral-100">
                  <tr className="text-left">
                    <th className="py-4 px-2">Repository</th>
                    <th className="py-2 px-2">Description</th>
                    <th className="py-2 px-2">Stars</th>
                  </tr>
                </thead>
                <tbody>
                  {repos.map((r: any) => (
                    <tr key={r.id} className="border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 group">
                      <td className="py-6 px-2 max-w-sm">
                        <a href={r.html_url} target="_blank" rel="noreferrer" className="font-medium underline group-hover">
                          {r.full_name}
                        </a>
                      </td>
                      <td className="py-2 px-2 max-w-xl">
                        {r.description && (
                          <div className="text-neutral-600 dark:text-neutral-400 text-xs max-w-xl mt-0.5">{r.description}</div>
                        )}
                      </td>
                      <td className="py-2 px-2 tabular-nums">
                        {r.stargazers_count?.toLocaleString?.() ?? r.stargazers_count}
                      </td>
                    </tr>
                  ))}
                  {repos.length === 0 && (
                    <tr>
                      <td colSpan={3} className="py-6 text-center text-neutral-600 dark:text-neutral-400">
                        No trending repositories found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
