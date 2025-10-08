"use client"
import React, { useState } from 'react'

import { motion } from 'motion/react';
type SidebarProps = {
  active: string,
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

const sidebarLinks = [
  {
    key: "base",
    label: "Open Source Finder",
    onClick: (setActive: React.Dispatch<React.SetStateAction<string>>) => () => setActive("base"),
    className: (active: string) =>
      `text-neutral-700 dark:text-neutral-300  dark:hover:bg-neutral-700 rounded px-2 py-2 w-full text-left ${
        active === "base"
          ? "bg-radial from-neutral-300 to-neutral-50 dark:bg-radial dark:from-neutral-700 dark:to-neutral-900"
          : "hover:bg-radial hover:from-neutral-50 hover:to-neutral-300  dark:hover:bg-radial dark:hover:from-neutral-700 dark:hover:to-neutral-900"
      }`,
    ariaCurrent: "page" as const,
    svg: (<svg  xmlns="http://www.w3.org/2000/svg"  width={16}  height={16}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>)
  },
  {
    key: "trending",
    label: "Trending Repos",
    onClick: (setActive: React.Dispatch<React.SetStateAction<string>>) => () => setActive("trending"),
    className: (active: string) =>
      `text-neutral-700 dark:text-neutral-300 rounded px-2 py-2 w-full text-left ${
        active === "trending"
          ? "bg-radial from-neutral-50 to-neutral-300 dark:bg-radial dark:from-neutral-700 dark:to-neutral-900"
          : "hover:bg-radial hover:from-neutral-50 hover:to-neutral-300  dark:hover:bg-radial dark:hover:from-neutral-700 dark:hover:to-neutral-900"
      }`,
    ariaCurrent: undefined,
    svg:(<svg  xmlns="http://www.w3.org/2000/svg"  width={16}  height={16}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-flame"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.621 -2.333 5.588c0 3.704 3.134 6.706 7 6.706s7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" /></svg>)
  },
  {
    key: "tech",
    label: "Latest Tech News",
    onClick: (setActive: React.Dispatch<React.SetStateAction<string>>) => () => setActive("tech"),
    className: (active: string) =>
      `text-neutral-700 dark:text-neutral-300  dark:hover:bg-neutral-700 rounded px-2 py-2 w-full text-left ${
        active === "tech"
          ? "bg-radial from-neutral-50 to-neutral-300 dark:bg-radial dark:from-neutral-700 dark:to-neutral-900"
          : "hover:bg-radial hover:from-neutral-50 hover:to-neutral-300  dark:hover:bg-radial dark:hover:from-neutral-700 dark:hover:to-neutral-900"
      }`,
    ariaCurrent: undefined,
    svg:(<svg  xmlns="http://www.w3.org/2000/svg"  width={16}  height={16}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-news"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" /><path d="M8 8l4 0" /><path d="M8 12l4 0" /><path d="M8 16l4 0" /></svg>)
  },
  {
    key: "design",
    label: "Design Inspirations",
    onClick:(setActive: React.Dispatch<React.SetStateAction<string>>) => () => setActive("Design"),
    className: (active: string) =>
      `text-neutral-700 dark:text-neutral-300  dark:hover:bg-neutral-700 rounded px-2 py-2 w-full text-left ${
        active === "Design"
          ? "bg-radial from-neutral-50 to-neutral-300 dark:bg-radial dark:from-neutral-700 dark:to-neutral-900"
          : "hover:bg-radial hover:from-neutral-50 hover:to-neutral-300  dark:hover:bg-radial dark:hover:from-neutral-700 dark:hover:to-neutral-900"
      }`,
      svg:(<svg  xmlns="http://www.w3.org/2000/svg"  width={16}  height={16}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mood-spark"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -8.994 9" /><path d="M9 10h.01" /><path d="M15 10h.01" /><path d="M9.5 15a3.5 3.5 0 0 0 5 0" /><path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" /></svg>)
  },
  {
    key: "guide",
    label: "Beginners Guide",
    onClick:(setActive: React.Dispatch<React.SetStateAction<string>>) => () => setActive("Guide"),
    className: (active: string) =>
      `text-neutral-700 dark:text-neutral-300  dark:hover:bg-neutral-700 rounded px-2 py-2 w-full text-left ${
        active === "Guide"
          ? "bg-radial from-neutral-50 to-neutral-300 dark:bg-radial dark:from-neutral-700 dark:to-neutral-900"
          : "hover:bg-radial hover:from-neutral-50 hover:to-neutral-300  dark:hover:bg-radial dark:hover:from-neutral-700 dark:hover:to-neutral-900"
      }`,
      svg:(<svg  xmlns="http://www.w3.org/2000/svg"  width={16}  height={16}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-help-square-rounded"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /><path d="M12 16v.01" /><path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" /></svg>)
  },
]


const Sidebar = ({active, setActive }: SidebarProps) => {

  const [hovered, setHovered] = useState<number | null>(null);
  const [hovered2, setHovered2] = useState<number | null>(null);

  return (
    <div>
      <div className="w-60 sticky left-0 border-r border-neutral-100 dark:border-neutral-800 h-screen flex flex-col items-start p-4">
       

        <nav className=" flex flex-col py-2 w-full">
       

<p className='text-sm text-neutral-500 dark:text-neutral-400 mb-3'>General</p>
          {sidebarLinks.map((link, idx) => (
            <button
              key={link.key}
              type="button"
              onClick={link.onClick(setActive)}
              className={`relative $link.className(active) text-left px-2 group`}
              aria-current={link.ariaCurrent}
              onMouseEnter={() => setHovered2(idx)}
              onMouseLeave={() => setHovered2(null)}
            >
            {hovered2 === idx &&  <motion.span
            layoutId='underline2'
            transition={{ duration: 0.1, ease: "easeInOut" }}
                  className="w-full h-full absolute rounded-lg bg-radial from-white to-neutral-200 dark:bg-radial dark:from-neutral-700 dark:to-neutral-900 bottom-0 left-0"
                />}

           <span  className={`relative z-10 $link.className(active) text-sm text-left py-3 dark:text-neutral-300 text-neutral-700 flex items-center gap-2 group-hover:px-2 transition-all duration-300`}><span className='group-hover:scale-120 transition-all duration-300 hover:text-blue-500'>{link.svg}</span> {link.label}</span> 
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}


export default Sidebar