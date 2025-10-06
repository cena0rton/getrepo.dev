import React from 'react'

type SidebarProps = {
  active: string,
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

const Sidebar = ({active, setActive }: SidebarProps) => {
  return (
    <div>
      <div className="w-60 sticky left-0 border-r border-t border-neutral-50/20 h-screen flex flex-col items-start p-4">
        <span className='text-2xl tracking-tight font-medium p-2'> getRepo.dev <br/> <span className='text-base text-blue-500'>(Under Development)</span></span>

        <nav className="mt-8 flex flex-col gap-2 w-full">
          <button
            type="button"
           
            onClick={() => setActive("base")}
            className={`text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded px-2 py-2 w-full text-left ${
              active === "base"
                ? "bg-neutral-200 dark:bg-neutral-800"
                : "hover:bg-neutral-100 dark:hover:bg-neutral-700"
            }`}
            aria-current="page"
          >
            Open Source Finder
          </button>
          <button
            type="button"
            className={`text-neutral-700 dark:text-neutral-300 rounded px-2 py-2 w-full text-left ${
              active === "trending"
                ? "bg-neutral-200 dark:bg-neutral-800"
                : "hover:bg-neutral-100 dark:hover:bg-neutral-700"
            }`}
            onClick={() => {
              setActive("trending");
              window.location.hash = "#trending";
            }}
          >
            Trending Repos
          </button>
          <button
            type="button"
            className="text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded px-2 py-2 w-full text-left"
            onClick={() => window.location.hash = "#"}
          >
            Latest Tech News
          </button>
          <button
            type="button"
            className="text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded px-2 py-2 w-full text-left"
            onClick={() => window.location.hash = "#"}
          >
            Best UI Design Sites
          </button>
          <button
            type="button"
            className="text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded px-2 py-2 w-full text-left"
            onClick={() => window.location.hash = "#"}
          >
            How to Contribute to Open Source
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar