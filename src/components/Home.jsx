import React from 'react'

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 mt-10 rounded-lg h-fit p-10">
        <div className='flex  gap-10'>
          <div className='bg-blue-500 rounded-lg w-52 h-24 flex p-4 '>
            <p className='text-center text-white self-center font-bold '>Active Employees: </p>
          </div>
          <div className='bg-green-500 rounded-lg w-52 h-24 flex p-4 '>
            <p className='text-center text-white self-center font-bold '>Available Laptops:</p>
          </div> 
          <div className='bg-yellow-500 rounded-lg w-52 h-24 flex p-4 '>
            <p className='text-center text-white self-center font-bold '>Live Admins:</p>
          </div>     
         
         

        </div>
    </div>
  )
}

export default Home