import React from 'react'
import Sidebar from '../components/ui/Sidebar'
import Dash from '../components/Dash'

const page = () => {
  return (
    <div>
        <div className="flex items-left justify-start">
            <div className='relative'>
            <Sidebar/>
            </div>
            <Dash/>
        </div>
    </div>
  )
}

export default page