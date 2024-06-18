import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logout, loadUser } from '../store/modules/authSlice';
import AppServices from '../services'

const Profile = () => {
  const [error, setError] = useState('');
  const [student,setStudent]=useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token')
    navigate('/studentLogin');
  };

 const getStudent= async ()=>{

 const response= await AppServices.getCurrentStudent()
 console.log(response)
 try{
  if(response?.status === 200){
    setStudent(response.data.data)
    console.log(response.data.data)
  }else{
    setError(response?.message || 'Error occurred while Fetching laptops');
  }
}catch(error){
  setError(error?.message || 'An error occurred');
}
 }

 useEffect(() => {
    
  getStudent()

},[])

  return (
    <div className="bg-gray-50 dark:bg-gray-900 mt-10 rounded-lg h-fit px-52 py-10 flex flex-col justify-center">

      <div className='rounded-full bg-blue-400 w-24 h-24 flex  self-center items-center text-center justify-center '>
        <p className='text-4xl font-bold text-slate-700'>{student?.fullNames?.split(" ")[0][0] +""+student?.fullNames?.split(" ")[1][0]}</p>
      </div> 
      <div className='mt-6 flex gap-x-20 flex-wrap h-40 w-full self-center justify-center'>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First Name
                </label>
                <input
                  value={student?.fullNames?.split(" ")[0]}
                  type=""
                  name="fullNames"
                  id="fullNames"
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-52 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  required=""
                  readOnly
                />
            </div>

            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last Name
                </label>
                <input
                  value={student?.fullNames?.split(" ")[1]}
                  type="" 
                  name="fullNames"
                  id="fullNames"
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-52 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  required=""
                  readOnly
                />
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  value={student.email}
                  type=""
                  name="fullNames"
                  id="fullNames"
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-52 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  required=""
                  readOnly
                />
            </div>
            
      </div>
      <button className='bg-blue-400 w-40 h-10 self-center rounded-lg mt-8 font-bold text-white' onClick={handleLogout}>Logout</button>
     
    </div>
  );
};

export default Profile;