import React from 'react'
import { FaUsers } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 mt-10 rounded-lg h-fit p-10">
        <div className='flex  justify-between'>
          <div className='relative bg-blue-500 rounded-lg w-60 h-32 flex p-6 gap-2 '>
            <div className='absolute top-2 left-2 bg-white flex justify-center w-10 h-10 items-center rounded-md'>
              <FaUsers className=' text-2xl'/>
            </div>
           
            <p className='text-center text-white self-center font-bold mt-4 '>Active Employees: <span className='text-xl ml-2'>{9}</span>  </p>
          </div>
          <div className='relative bg-green-500 rounded-lg w-52 h-32 flex p-6 gap-2 '>
            <div className='absolute top-2 left-2 bg-white flex justify-center w-10 h-10 items-center rounded-md'>
              <FaLaptop className=' text-2xl'/>
            </div>
           
            <p className='text-center text-white self-center font-bold mt-4 '>Available Laptops: <span className='text-xl'>{8}</span></p>
          </div>
          <div className='relative bg-yellow-500 rounded-lg w-52 h-32 flex p-6 gap-2 '>
            <div className='absolute top-2 left-2 bg-white flex justify-center w-10 h-10 items-center rounded-md'>
              <GrUserAdmin className=' text-2xl'/>
            </div>
           
            <p className='text-center text-white self-center font-bold mt-4 '>Live Admins: <span className='text-xl ml-2'>{3}</span></p>
          </div>
             
         
         

        </div>
    </div>
  )
}

export default Home