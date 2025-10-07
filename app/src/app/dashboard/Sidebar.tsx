import React from 'react'

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
    onClick: () => () => { window.location.hash = "#"; },
    className: () =>
      "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded px-2 py-2 w-full text-left",
    ariaCurrent: undefined,
  },
  {
    key: "guide",
    label: "Beginners Guide",
    onClick: () => () => { window.location.hash = "#"; },
    className: () =>
      "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded px-2 py-2 w-full text-left",
    ariaCurrent: undefined,
  },
];

const Sidebar = ({active, setActive }: SidebarProps) => {
  return (
    <div>
      <div className="w-60 sticky left-0 border-r border-t border-neutral-50/20 h-screen flex flex-col items-start p-4">
        <span className='text-2xl tracking-tight font-medium p-2'> getRepo.dev <br/> <span className='text-base text-blue-500'>(Under Development)</span></span>

        <nav className="mt-8 flex flex-col gap-2 w-full">
          {sidebarLinks.map(link => (
            <button
              key={link.key}
              type="button"
              onClick={link.onClick(setActive)}
              className={link.className(active)}
              aria-current={link.ariaCurrent}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}


export default Sidebar