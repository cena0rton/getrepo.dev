"use client"
import React from 'react'
import Sidebar from './Sidebar'
import Dash from './Dash'
import TrendingPage from '../trending/page'

const Page = () => {

const [active, setActive] = React.useState<string>("base")
  return (
    <main className="min-h-screen">
      
        <div className="hidden md:block fixed inset-y-0 left-0 w-[240px] z-20 bg-white dark:bg-neutral-900 border-r border-neutral-100 dark:border-neutral-800">
          <Sidebar setActive={setActive} />
        </div>

    
        <div className='px-2 pl-[240px]'>
         {active === "base" && <Dash />}
         {active === "trending" && <TrendingPage/>}
        </div>
        
        
      
    </main>
  )
}
export default Page
