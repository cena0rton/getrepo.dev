"use client"
import React from 'react'
import Sidebar from './Sidebar'
import Dash from './Dash'
import TrendingPage from '../trending/page'
import BeginnersGuide from '../guide/page'

const Page = () => {

const [active, setActive] = React.useState<string>("base")
  return (
    <>

<div className='fixed z-20 top-0 w-full h-16 bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800 flex items-center'>
        <h1 className='text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 text-left px-4 '>getRepo<span className='text-blue-500'>.dev</span></h1>
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
