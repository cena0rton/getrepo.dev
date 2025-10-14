import { motion } from 'motion/react'
import React from 'react'

const Soon = () => {

    const text = "Building.. Right.. Now.."
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <h1 className='text-4xl font-medium text-neutral-900 dark:text-neutral-100 text-center'>

           {text.split(" ").map((word, idx) => (
            <motion.span
            className='inline-block text-neutral-900 dark:text-neutral-100'
            initial={{ x: -20, rotateX: 50, rotateY: -50, opacity: 0, scale: 0 }}
            animate={{ x: 0, rotateX: -30, rotateY: 30, opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05, type: "spring", stiffness: 200 , duration: 2 }}
            key={idx}>{word}</motion.span>
           ))} 
           </h1>
    </div>
  )
}

export default Soon