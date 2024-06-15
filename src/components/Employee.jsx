import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from "flowbite-react";
import {useEffect,useState} from 'react'
import axios from 'axios'
import { Modal } from 'flowbite-react';
import AppServices from '../services'



const Employee = () => {
  const [isModalOpen,setIsModalOpen]=useState(false)
  const [error, setError] = useState('');
  const [employees,setEmployees]=useState([])

  const getEmployees= async ()=>{
    const response= await AppServices.getAllEmployee()
    console.log(response)
    try{
      if(response?.status === 200){
        setEmployees(response.data.data)
       
      }else{
        setError(response?.message || 'Error occurred while Fetching laptops');
      }
    }catch(error){
      setError(error?.message || 'An error occurred');
    }
  }

  useEffect(() => {
    
    getEmployees()
  
  },[])
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 mt-10 rounded-lg h-fit p-10">
        <div className='flex justify-center justify-items-center '>
            <h3 className='text-xl font-bold'>Employee List (active)</h3>

        </div>
        <Link to={'/dashboard/add_employee'} className=' border border-blue-500 bg-blue-500 p-2 rounded-md text-white outline-none'>Add Employee</Link>
        <div className="overflow-x-auto mt-10">
          {employees ? <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Employee names</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Department</Table.HeadCell>
              <Table.HeadCell>Tel</Table.HeadCell>
             
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Delete</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {employees?.map((item) =>(
              
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.firstName +" "+ item.lastName}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.email}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.department}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.phone}
                </Table.Cell>
                
                
                <Table.Cell>
                  <a href={`/dashboard/EditEmployee/${item.id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </a>
                  
                </Table.Cell>
                <Table.Cell>
                  <button href={'#'} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={()=>{console.log(!isModalOpen)}} >
                    Delete
                  </button>
                  
                </Table.Cell>
              </Table.Row>
              ))}
             
            </Table.Body>
            </Table> :
            <div className='text-center font-bold  text-xl'>Oops ! No users found</div>
            }
          {isModalOpen && <Modal/>}
      </div>
    </div>
  )
}

export default Employee