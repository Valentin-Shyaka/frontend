import React from 'react'
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate=useNavigate()
  return (
    <div className='w-screen h-screen flex flex-col justify-center align-middle items-center bg-blue-500'>
        <h1 className='font-bold text-2xl text-white'>Welcom to Lan<span className=' text-blue-500'>Farm </span>System</h1>
        <div className='bg-white flex gap-4 flex-col mt-20 border p-20 rounded-md shadow-md'>
        
            <h2 className='text-3xl text-blue-500 font-bold '>Continue as:</h2>
                <Button className='bg-blue-500' onClick={()=>navigate('/adminLogin')}>Admin</Button>
               
        </div>
    </div>
  )
}

export default Landing