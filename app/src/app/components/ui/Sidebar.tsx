import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div className="w-60 border-r border-t border-neutral-50/20 h-screen flex flex-col items-start p-4">
        <span className='text-2xl tracking-tight font-medium p-2'> getRepo.dev</span>

     <nav className="mt-8 flex flex-col gap-2 w-full">
        <a
          href="#"
          className="text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded px-2 py-2 w-full block"
          aria-current="page"
        >
          Open Source Finder
        </a>
        <a
          href="#"
          className="text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded px-2 py-2 w-full block"
        >
          Latest Tech News
        </a>
        <a
          href="#"
          className="text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded px-2 py-2 w-full block"
        >
          Best UI Design Sites
        </a>
        <a
          href="#"
          className="text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded px-2 py-2 w-full block"
        >
          How to Contribute to Open Source
        </a>
      </nav>
     </div>
    </div>
  )
}

export default Sidebar