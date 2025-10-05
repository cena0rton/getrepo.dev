import React from 'react'
import Sidebar from '../components/ui/Sidebar'
import Dash from '../components/Dash'

const Page = () => {
  return (
    <main className="min-h-screen">
      
        <div className="hidden md:block fixed inset-y-0 left-0 w-[240px] z-20 bg-white dark:bg-neutral-900 border-r border-neutral-100 dark:border-neutral-800">
          <Sidebar />
        </div>

        <div className='px-2 pl-[240px]'>
        <Dash />
        </div>
        
        
      
    </main>
  )
}

export default Page