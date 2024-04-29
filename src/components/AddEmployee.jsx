import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";

const AddEmployee = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 mt-2 rounded-lg p-10">
    <div className="flex flex-col items-center justify-center ">
      
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Add Employee
                </h1>
                
                <form className="flex max-w-md flex-col gap-4" action="#" >
                    <div>
                        <label for="names" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Names</label>
                        <input type="text" name="names" id="names" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe " required=""/>
                    </div>
                                        <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="email4" value="Your email" />
                        </div>
                        <TextInput id="email4" type="email" rightIcon={HiMail} placeholder="name@example.com" required />
                        </div>
                    <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <input type="text" name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="category " required=""/>
                    </div>
                    <div>
                        <label for="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tel. Number</label>
                        <input type="text" name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0788000000 " required=""/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    <div>
                        <label for="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
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