import React from 'react'
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate=useNavigate()
  return (
    <div className='w-screen h-screen flex flex-col justify-center align-middle items-center bg-blue-500'>
        <h1 className='font-bold text-2xl text-white'>Welcom to Student Library System</h1>
        <div className='bg-white flex gap-4 flex-col mt-20 border p-20 rounded-md shadow-md'>
        
            <h2 className='text-3xl text-blue-500 font-bold text-center'>Let's get you started:</h2>

            <div className='flex w-full gap-2 justify-center'>
            <Button className='bg-blue-500 w-32' onClick={()=>navigate('/studentLogin')}>Log In</Button>
            <Button className='bg-blue-500 w-32' onClick={()=>navigate('/Signup')}>Signup</Button>
            </div>
                
               
        </div>
    </div>
  )
}

export default Landing