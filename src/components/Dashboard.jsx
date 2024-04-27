import React from 'react'
import { SidebarComponent } from './Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex gap-6 '>
      <SidebarComponent/>
      <div className='p-6 w-full'>
        <h1 className='font-bold text-2xl text-slate-700'>Lan<span className=' text-blue-500'>Farm </span>System</h1>

        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard