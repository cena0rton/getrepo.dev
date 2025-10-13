"use client"
import React from 'react'

import Sidebar from './Sidebar'
import Dash from './Dash'
import TrendingPage from '../trending/page'
import BeginnersGuide from '../guide/page'
import ThemeSwitcher from '../../components/ThemeSwitcher'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'

const Page = () => {

const [active, setActive] = React.useState<string>("base")
const [click, setClick] = React.useState<boolean>(false)
  return (
    <>

<div className='fixed z-20 top-0 w-full h-16 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-4'>
        <div className="flex items-center gap-4">
          <h1 className='text-2xl font-medium tracking-tight text-neutral-900 text-shadow-sm dark:text-neutral-100 text-left'>getRepo<span className='text-[#6366f1]'>.dev</span></h1>
        
        </div>

    <button onClick={() => setClick(!click)} className='md:hidden relative'>
      
      <div className="rounded-full p-1 border border-neutral-200 dark:border-neutral-700">
     {!click && <motion.svg 
     initial={{ opacity: 0, rotate: 180 }}
     animate={{ opacity: 1, rotate: 0 }}
     exit={{ opacity: 0, rotate: -180 }}
     transition={{ duration: 0.3, ease: "easeInOut" }}
     layoutId='menu-icon'
     xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="none"  strokeWidth={1}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2 stroke-1 stroke-[#6366f1] "><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></motion.svg>
}

{
    click && <motion.svg
    initial={{ opacity: 0, rotate: 180 }}
    animate={{ opacity: 1, rotate: 0 }}
    exit={{ opacity: 0, rotate: -180 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    layoutId='menu-icon'
    xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-x stroke-2 stroke-[#6366f1] "><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></motion.svg>
}
</div>
{click &&<AnimatePresence>
    <motion.div 
    initial={{ x: 300 , opacity: 0 }}
    animate={{ x: click ? 0 : 300 , opacity: 1 }}
    exit={{x: -30 ,opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className={`absolute w-100 top-10 -left-50 h-full bg-neutral-50 dark:bg-neutral-200 border-b border-neutral-200 dark:border-neutral-800 ${click ? "block" : "hidden"}`}>

      <Sidebar active={active} setActive={setActive} >
      <Link href="https://github.com/cena0rton/getrepo.dev" target='_blank' rel='noopener noreferrer'><button
          className="text-sm text-neutral-900 dark:text-neutral-100 px-4 border border-neutral-200 
          text-shadow-sm
          w-fit
          mt-6
          dark:text-shadow-sm
          dark:border-neutral-700 rounded-md py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2 shadow-[inset_0_2px_8px_0_rgba(0,0,0,0.08)] dark:shadow-[inset_0_2px_8px_0_rgba(255,255,255,0.08)]"
        >
          <svg  xmlns="http://www.w3.org/2000/svg"  width={16}  height={16}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg> Github Code
        </button></Link></Sidebar>
    </motion.div>
    </AnimatePresence>}


    </button>

        <div  className="hidden md:flex items-center justify-center gap-2">
          <ThemeSwitcher />
          
     

        <Link href="https://github.com/cena0rton/getrepo.dev" target='_blank' rel='noopener noreferrer'><button
          className="text-sm text-neutral-900 dark:text-neutral-100 px-4 border border-neutral-200 
          text-shadow-sm
          dark:text-shadow-sm
          dark:border-neutral-700 rounded-md py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2 shadow-[inset_0_2px_8px_0_rgba(0,0,0,0.08)] dark:shadow-[inset_0_2px_8px_0_rgba(255,255,255,0.08)]"
        >
          <svg  xmlns="http://www.w3.org/2000/svg"  width={16}  height={16}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg> Github Code
        </button></Link>
        </div>
      </div>


    <main className="min-h-screen pt-16">
     
      
        <div className="hidden md:block fixed top-16 inset-y-0 left-0 w-[240px] z-20 bg-white dark:bg-neutral-900 border-r  border-neutral-100 dark:border-neutral-800">
          <Sidebar active={active} setActive={setActive}>
            </Sidebar>
        </div>

    
        <div className='px-2 md:pl-[240px] '>
         {active === "base" && <Dash />}
         {active === "trending" && <TrendingPage/>}
         {active === "tech" && <div>Tech</div>}
         {active === "Design" && <div>Design</div>}
         {active === "Guide" && <BeginnersGuide/>}
        </div>
        
        
      
    </main>
    </>
  )
}
export default Page
