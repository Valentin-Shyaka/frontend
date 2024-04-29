import React from 'react'
import {Link} from 'react-router-dom'

const Employee = () => {
  return (
    
        <div className="bg-gray-50 dark:bg-gray-900 mt-10 rounded-lg h-fit p-10">
          <div className='flex justify-center justify-items-center '>
              <h3 className='text-xl font-bold'>Employee List</h3>

          </div>
          <Link to={'/dashboard/add_employee'} className=' border border-blue-500 bg-blue-500 p-2 rounded-md text-white outline-none'>Add Employee</Link>
        </div>
  )
}

export default Employee