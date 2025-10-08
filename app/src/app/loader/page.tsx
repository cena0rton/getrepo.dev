"use client"
import React from 'react'

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-vh relative">
        
        <motion.span
         className="size-6 border-1 border-neutral-200 rounded-full bg-linear-to-r from-neutral-300 to bg-neutral-400"
         animate={{translateX: 5 }}
        //  animate={{ rotate: 360 }}
         transition={{ duration: 0.4, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
       />

<motion.span
         className="size-6 border-1 bg-linear-to-r from-neutral-300 to bg-neutral-500 border-neutral-200 rounded-full relative z-10"
         animate={{translateX: -5 ,}}
        //  animate={{ rotate: 360 }}
         transition={{ duration: 0.4,delay:1, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
       />
      
      <motion.span
         className="size-6 border-1 bg-linear-to-r from-neutral-300 to bg-neutral-600 border-neutral-200 rounded-full -ml-3"
         animate={{translateX: 5 }}
        //  animate={{ rotate: 360 }}
         transition={{ duration: 0.4,delay: 0, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
       />
     
     </div>
  )
}

export default Loader