import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Label, TextInput , Select} from "flowbite-react";
import { useState,useEffect } from 'react';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { HiMail } from "react-icons/hi";
import AppServices from '../services'

const AddEmployee = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      phone: Yup.string()
        .matches(/^\d+$/, "Phone must contain only numerical characters")
        .required("Phone is required")
        .min(10, "Phone must be 10 characters")
        .max(10, "Phone must be 10 characters"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    //   password: Yup.string()
    //     .required("Password is required")
    //     .min(6, "Password must be at least 6 characters"),
      nationalId: Yup.string()
        .matches(/^\d+$/, "ID must contain only numerical characters")
        .required("NID is required")
        .min(16, "NID must be 16 characters")
        .max(16, "NID must be 16 characters"),
    });
  
    const handleSubmit = async (values, { resetForm }) => {
      try {
        setLoading(true);
        setError('');
        const response = await AppServices.employeeRegister({...values,department:"IT",position:"manager"} );
        if (response?.status === 201) {
          setLoading(false);
          navigate('/dashboard/employee');
          resetForm();
        } else {
          setLoading(false);
          setError(response?.message || 'Error occurred while logging in');
        }
      } catch (submissionError) {
        setLoading(false);
        setError(submissionError?.message || 'An error occurred');
      }
    };
  
    const formik = useFormik({
      initialValues: { email: '',lastName:'',firstName:'',phone:'',nationalId:""},
      validationSchema,
      onSubmit: handleSubmit,
    });
  
    const { handleChange, handleBlur, handleSubmit: submitForm, values, errors, touched } = formik;

   
  return (
    <div className="bg-gray-50 dark:bg-gray-900 mt-5 rounded-lg p-20">
    <div className="flex flex-col items-center justify-center ">
      
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Add Employee
                </h1>
                
                {error && <div className="text-red-500 text-sm">{error}</div>}
            <form className="space-y-4 md:space-y-6  gap-4 w-full h-fit " onSubmit={submitForm}>
              
              
            <div className='flex w-full justify-between'>

<div>
  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    First Name
  </label>
  <input
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.firstName}
    type="text"
    name="firstName"
    id="firstName"
    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="John"
    required=""
  />
  {touched.firstName && errors.firstName && <div className="text-red-500 text-sm">{errors.firstName}</div>}
</div>
<div>
  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Last Name
  </label>
  <input
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.lastName}
    type="text"
    name="lastName"
    id="lastName"
    placeholder="Doe"
    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    required=""
  />
  {touched.lastName && errors.lastName && <div className="text-red-500 text-sm">{errors.lastName}</div>}
</div>
</div>



              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
                {touched.email && errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
              </div>

              <div className='flex w-full justify-between'>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Tel Number
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  type="number-pad"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0788******"
                  required=""
                />
                {touched.phone && errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
              </div>
              {/* <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                {touched.password && errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
              </div> */}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  National ID
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nationalId}
                  type=""
                  name="nationalId"
                  id="nationalId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="***********************18"
                  required=""
                />
                {touched.nationalId && errors.nationalId && <div className="text-red-500 text-sm">{errors.nationalId}</div>}
              </div>


              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a href="/" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {loading ? 'Signing In...' : 'Sign in'}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account yet?{' '}
                <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign in
                </a>
              </p>
            </form>
            </div>
        </div>
    </div>
  </div>
  )
}

export default AddEmployee