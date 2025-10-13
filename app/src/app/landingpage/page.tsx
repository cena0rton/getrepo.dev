"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { motion, stagger, delay } from 'motion/react'

export default function Page() {
  const router = useRouter()
  const [search, setSearch] = useState('')
  
  const handleSearch = () => {
    router.push(`/dashboard?search=${search}`)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const text = "Contributing";

  return (
    <div className="min-h-screen w-full relative">
      <div className='absolute top-4 right-4 text-sm text-neutral-500'><code>version 0.0.1</code></div>
      <div className='absolute top-4 left-4 text-sm text-neutral-500'><code>development in progress</code></div>
      {/* Radial Gradient Background */}
      <div className="absolute h-screen inset-0 z-0 bg-[radial-gradient(125%_125%_at_50%_100%,_#171c1f_40%,_#6366f1_70%)] blur-3xl" />
      {/* Your Content/Components */}
      <div className='relative z-10 px-2'>
        <div className='flex flex-col max-w-4xl items-center justify-center h-screen mx-auto'>
          <h1 className='lg:text-7xl/20 text-4xl/12 text-neutral-100 font-medium tracking-tight text-center  mx-auto'>
            Start <span className='text-[#8ff47b] w-full relative p-1 bg-violet-500/10'>


              <span className="rounded-full animate-pulse size-2 -translate-x-0.5 -translate-y-0.5 absolute -top-0.5 -left-0.5 bg-[#6366f1]"></span>
              <span className="rounded-full animate-pulse size-2 translate-x-0.5 translate-y-0.5 absolute -bottom-0.5 -right-0.5 bg-[#6366f1]"></span>
              <span className="rounded-full animate-pulse size-2 translate-x-0.5 -translate-y-0.5 absolute -top-0.5 -right-0.5 bg-[#6366f1]"></span>
              <span className="rounded-full animate-pulse size-2 -translate-x-0.5 translate-y-0.5 absolute -bottom-0.5 -left-0.5 bg-[#6366f1]"></span>
              
              {text.split('').map((word, idx)=> 
                <motion.span 
                key={idx}
                className="inline-block"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.05, type: "spring", stiffness: 200 , duration: 2 }}>{word}</motion.span>
              )}
              </span> to <br /> Open Source Now!
          </h1>
          <div className='w-full relative group flex items-center justify-center mt-8'>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder='Search example: react, nextjs, supabase..'
              className='w-full relative z-10 max-w-md p-4 rounded-tl-lg rounded-bl-lg border border-r-0 border-neutral-700 text-neutral-100 outline-none bg-neutral-800'
            />
            <div className='absolute z-0 inset-0 w-full max-w-lg h-full rounded-lg animate-pulse animation-duration-2000 bg-[#6366f1] mx-auto p-4 blur-sm group-hover:blur-md group-hover:animate-none transition-all duration-300 ' />
            <button className='bg-neutral-800 p-4 cursor-pointer relative z-10 rounded-tr-lg rounded-br-lg border border-l-1 border-neutral-700'
            onClick={handleSearch}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search stroke stroke-[#6366f1]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            </button>
          </div>
          <p className='text-neutral-500 text-center mx-auto md:text-lg text-base mt-8'>
            Your complete roadmap to making your first open <br/> source  contribution and becoming part of the global developer community.
          </p>
        </div>
      </div>
    </div>
  )
}