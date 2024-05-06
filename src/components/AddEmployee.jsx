import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Label, TextInput , Select} from "flowbite-react";
import { useState,useEffect } from 'react';
import { HiMail } from "react-icons/hi";


const AddEmployee = () => {
    const [category,setCategory]= useState([])
    const navigate= useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/admin/category')
        .then(result =>{
            console.log(result.data.Result.rows)
            setCategory(result.data.Result.rows)
        }).catch(err => console.log(err))
      
      },[])

    const [values,setValues]= useState({
        fullName:"",
        email:"",
        category:"",
        telnumber:"",
        password:""
        
    })

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(values)
        axios.post("http://localhost:3001/admin/add_employee",values)
            .then(result =>{
                if(result.data.employeeAddition){
                    navigate('/dashboard/employee')
                }else{
                    alert(result.data.Error)
                }
             } )
           
            .then(err =>console.log(err))


    }
  return (
    <div className="bg-gray-50 dark:bg-gray-900 mt-5 rounded-lg p-20">
    <div className="flex flex-col items-center justify-center ">
      
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Add Employee
                </h1>
                
                <form className="flex max-w-md flex-col gap-4" action="#"  onSubmit={handleSubmit}>
                    <div>
                        <label for="names" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Names</label>
                        <input onChange={(e)=>{setValues({...values, fullName:e.target.value})}} type="text" name="names" id="names" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe " required=""/>
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="email4" value="Your email" />
                        </div>
                        <TextInput onChange={(e)=>{setValues({...values, email:e.target.value})}} id="email4" type="email" rightIcon={HiMail} placeholder="name@example.com" required />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="Select your country" />
                        </div>
                        <Select onChange={(e)=>{setValues({...values, category:e.target.value})}} id="countries" required>
                            {category?.map((item) => (
                                <option key={item.id}>{item.name}</option>
                            ))}
                        </Select>
                    </div>
                    
                    <div>
                        <label for="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tel. Number</label>
                        <input  onChange={(e)=>{setValues({...values, telnumber:e.target.value})}} type="text" name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0788000000 " required=""/>
                    </div>
                    <div>
                        <label for="names" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Secret key</label>
                        <input onChange={(e)=>{setValues({...values, password:e.target.value})}} type="text" name="names" id="names" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe " required=""/>
                    </div>
                   
                   
                  
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add</button>
                   
                </form>
            </div>
        </div>
    </div>
  </div>
  )
}

export default AddEmployee