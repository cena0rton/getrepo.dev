"use client";
import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="h-screen scroll-smooth">
      <table className="w-full text-sm text-neutral-800 dark:text-neutral-200 border-1 border-neutral-200/50 dark:border-neutral-700/50 rounded-lg">
        <thead className="sticky top-16 bg-white/80 dark:bg-neutral-900/60 backdrop-blur border-b border-neutral-200 dark:border-neutral-700">
          <tr className="text-left">
            <th className="py-4 px-2">Repository</th>
            <th className="py-2 px-2">Language</th>
            <th className="py-2 px-2 text-center">Tags</th>
            <th className="py-2 px-2">Stars</th>
            <th className="py-2 px-2">Issues</th>
            <th className="py-2 px-2">Forks</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, index) => (
            <tr key={index} className="border-b border-neutral-100 dark:border-neutral-800">
              <td className="py-6 px-2 max-w-sm">
                <div className="flex items-center gap-2">
                  {/* Avatar skeleton */}
                  <div className="w-6 h-6 bg-neutral-200 dark:bg-neutral-700 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    {/* Repository name skeleton */}
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse mb-1" 
                         style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                    {/* Description skeleton */}
                    <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse" 
                         style={{ width: `${Math.random() * 30 + 50}%` }}></div>
                  </div>
                </div>
              </td>
              
              <td className="py-2 px-2 max-w-20">
                {/* Language pill skeleton */}
                <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded-xl animate-pulse" 
                     style={{ width: `${Math.random() * 20 + 60}px` }}></div>
              </td>
              
              <td className="py-2 px-2 max-w-[24ch]">
                <div className="flex flex-wrap gap-1">
                  {/* Variable number of tag pills (0-3) */}
                  {Array.from({ length: Math.floor(Math.random() * 4) }).map((_, tagIndex) => (
                    <div key={tagIndex} 
                         className="h-5 bg-neutral-200 dark:bg-neutral-700 rounded-full animate-pulse" 
                         style={{ width: `${Math.random() * 30 + 40}px` }}></div>
                  ))}
                </div>
              </td>
              
              <td className="py-2 px-2">
                {/* Stars number skeleton */}
                <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse w-12"></div>
              </td>
              
              <td className="py-2 px-2">
                {/* Issues number skeleton */}
                <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse w-8"></div>
              </td>
              
              <td className="py-2 px-2">
                {/* Forks number skeleton */}
                <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse w-10"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonLoader;
