"use client"
import React from 'react'
import Sidebar from './Sidebar'
import Dash from './Dash'
import TrendingPage from '../trending/page'
import BeginnersGuide from '../guide/page'
import { motion, AnimatePresence } from 'motion/react'

const Page = () => {

const [active, setActive] = React.useState<string>("base")
const [theme, setTheme] = React.useState<boolean>(false);

// Apply dark mode class to document
React.useEffect(() => {
  if (theme) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [theme]);
  return (
    <>

<div className='fixed z-20 top-0 w-full h-16 bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between px-4'>
        <h1 className='text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 text-left'>getRepo<span className='text-blue-500'>.dev</span></h1>
        <div  className="flex items-center justify-center gap-2">


          <div>

         <button
         onClick={() => {setTheme(p => !p)}}
        className='hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md p-2'
         >
          <AnimatePresence mode="wait">
            {theme ? (
              <motion.svg
                key="sun"
                layoutId='theme-icon'
                initial={{ opacity: 0, rotate: 180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -180 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                xmlns="http://www.w3.org/2000/svg"  
                width={24}  
                height={24}  
                viewBox="0 0 24 24"  
                fill="none"  
                stroke="currentColor"  
                strokeWidth={1}  
                strokeLinecap="round"  
                strokeLinejoin="round"  
                className="icon icon-tabler icons-tabler-outline icon-tabler-brightness-down">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M12 5l0 .01" />
                <path d="M17 7l0 .01" />
                <path d="M19 12l0 .01" />
                <path d="M17 17l0 .01" />
                <path d="M12 19l0 .01" />
                <path d="M7 17l0 .01" />
                <path d="M5 12l0 .01" />
                <path d="M7 7l0 .01" />
              </motion.svg>
            ) : (
              <motion.svg
                key="moon"
                layoutId='theme-icon'
                initial={{ opacity: 0, rotate: 180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -180 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                xmlns="http://www.w3.org/2000/svg"  
                width={24}  
                height={24}  
                viewBox="0 0 24 24"  
                fill="none"  
                stroke="currentColor"  
                strokeWidth={1}  
                strokeLinecap="round"  
                strokeLinejoin="round"  
                className="icon icon-tabler icons-tabler-outline icon-tabler-moon-stars">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                <path d="M19 11h2m-1 -1v2" />
              </motion.svg>
            )}
          </AnimatePresence>
          </button> 

          </div>


        <a href="https://github.com/cena0rton/getrepo.dev" target='_blank' rel='noopener noreferrer'><button
          className="text-sm text-neutral-900 dark:text-neutral-100 px-4 border border-neutral-200 dark:border-neutral-700 rounded-md py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2 shadow-[inset_0_2px_8px_0_rgba(0,0,0,0.08)] dark:shadow-[inset_0_2px_8px_0_rgba(255,255,255,0.08)]"
        >
          <svg  xmlns="http://www.w3.org/2000/svg"  width={16}  height={16}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg> Github Code
        </button></a>
        </div>
      </div>
    <main className="min-h-screen pt-16">
     
      
        <div className="hidden md:block fixed top-16 inset-y-0 left-0 w-[240px] z-20 bg-white dark:bg-neutral-900 border-r  border-neutral-100 dark:border-neutral-800">
          <Sidebar active={active} setActive={setActive} />
        </div>

    
        <div className='px-2 pl-[240px] '>
         {active === "base" && <Dash />}
         {active === "trending" && <TrendingPage/>}
         {active === "Guide" && <BeginnersGuide/>}
        </div>
        
        
      
    </main>
    </>
  )
}
export default Page
