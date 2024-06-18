import React, { useState } from 'react'
import AppServices from '../services'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'


const AddBook = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const validationSchema = Yup.object().shape({
      name: Yup.string().required("book name is required"),
      author: Yup.string().required("book author is required"),
      publisher: Yup.string().required("publisher is required"),
      publicationYear: Yup.string().required("year published is required"),
      subject: Yup.string().required("book subject is required"),
     
    });
  
    const handleSubmit = async (values, { resetForm }) => {
      try {
        setLoading(true);
        setError('');
        const response = await AppServices.registerBook(values );
        if (response?.status === 201) {
          setLoading(false);
          navigate('/dashboard/books');
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
      initialValues: { name:'',author:'',publisher:'',publicationYear:'',subject:''},
      validationSchema,
      onSubmit: handleSubmit,
    });
  
    const { handleChange, handleBlur, handleSubmit: submitForm, values, errors, touched } = formik;
  return (
    <div className="bg-gray-50 dark:bg-gray-900 mt-10 rounded-lg p-20">
    <div className="flex flex-col items-center justify-center ">
      
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    New Book
                </h1>
                
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={submitForm}>
                    <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Name</label>
                        <input onChange={handleChange} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="category " required=""/>
                    </div>

                    <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                        <input onChange={handleChange} type="text" name="author" id="author" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="category " required=""/>
                    </div>

                    <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publisher</label>
                        <input onChange={handleChange} type="text" name="publisher" id="publisher" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="category " required=""/>
                    </div>

                    <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publication Year</label>
                        <input onChange={handleChange} type="text" name="publicationYear" id="publicationYear" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="category " required=""/>
                    </div>

                    <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                        <input onChange={handleChange} type="text" name="subject" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="category " required=""/>
                    </div>
                   
                  
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add</button>
                   
                </form>
            </div>
        </div>
    </div>
  </div>
  )
}

export default AddBook