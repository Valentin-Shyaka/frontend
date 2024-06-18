import React,{useState,useEffect} from 'react'
import { SidebarComponent } from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AppServices from '../services'

const Dashboard = () => {
  const [user,setUser]=useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const getUser= async ()=>{

    const response= await AppServices.getCurrentStudent()
    console.log(response)
    try{
     if(response?.status === 200){
       setUser(response.data.data)
       console.log(response.data.data)
     }else{
       setError(response?.message || 'Error occurred while Fetching laptops');
     }
   }catch(error){
     setError(error?.message || 'An error occurred');
   }
    }
   
    useEffect(() => {
       
     getUser()
   
   },[])
  
  return (
    <div className='flex gap-6 '>
      <SidebarComponent className='bg-blue-500'/>
      <div className='p-6 w-full'>
        <div className='flex justify-between items-center'>

          <h1 className='font-bold text-2xl text-slate-700'>Student<span className=' text-blue-500 mx-2'>Library</span>System</h1>

          <div className='bg-slate-200 w-60 h-16 rounded-lg flex p-2 gap-4 justify-center items-center cursor-pointer'>
            <div className='rounded-full bg-blue-400 p-1 w-10 h-10 flex  self-center items-center text-center justify-center '>
              <p className='text-md font-bold text-slate-700'>{user?.fullNames?.split(" ")[0][0] +""+user?.fullNames?.split(" ")[1][0]}</p>
              
            </div> 
            <div>
              <p className='text-sm font-bold'>{user?.fullNames}</p>
              <p className='text-sm'>{user?.email}</p>
            </div>
            
          </div>

        </div>
       

        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard