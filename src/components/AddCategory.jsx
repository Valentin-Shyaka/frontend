import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddCategory = () => {
    const [category,setCategory]= useState()
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/admin/add_category', {category})
        .then(result => {
            if(result.data){
                navigate('/dashboard/category')
            }else{
                alert(result.data.Error)
            }
        })
        .then(err => console.log(err))
    }
  return (
    <div className="bg-gray-50 dark:bg-gray-900 mt-10 rounded-lg p-20">
    <div className="flex flex-col items-center justify-center ">
      
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Add Category
                </h1>
                
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                    <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category name</label>
                        <input onChange={(e)=>setCategory(e.target.value)} type="text" name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="category " required=""/>
                    </div>
                   
                  
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add</button>
                   
                </form>
            </div>
        </div>
    </div>
  </div>
  )
}

export default AddCategory