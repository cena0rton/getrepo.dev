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
  },
]


const Sidebar = ({active, setActive }: SidebarProps) => {

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div>
      <div className="w-60 sticky left-0 border-r border-t border-neutral-50/20 h-screen flex flex-col items-start p-4">
        <span className='text-2xl tracking-tight font-medium p-2'> getRepo.dev <br/> <span className='text-base text-blue-500'>(Under Development)</span></span>

        <nav className="mt-8 flex flex-col py-4 w-full">
          {sidebarLinks.map((link, idx) => (
            <button
              key={link.key}
              type="button"
              onClick={link.onClick(setActive)}
              className={`relative $link.className(active) text-left px-2 py-3`}
              aria-current={link.ariaCurrent}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
            {hovered === idx &&  <motion.span
            layoutId='underline'
                  className="w-full h-full absolute rounded-lg bg-radial from-neutral-50 to-neutral-300 dark:bg-radial dark:from-neutral-700 dark:to-neutral-900 bottom-0 left-0"
                  
                />}
           <span  className={`relative z-10 $link.className(active) text-left py-3`}> {link.label}</span> 
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}


export default Sidebar