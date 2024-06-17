import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from "flowbite-react";
import {useEffect,useState} from 'react'
import axios from 'axios'
import { Modal } from 'flowbite-react';
import AppServices from '../services'
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";



const Employee = () => {
  const [isModalOpen,setIsModalOpen]=useState(false)
  const [error, setError] = useState('');
  const [employees,setEmployees]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5; // Number of items per page as per API default

  const getEmployees= async (page,limit)=>{
    const response= await AppServices.getAllEmployee(page,itemsPerPage)
    console.log(response)
    try{
      if(response?.status === 200){
        setEmployees(response.data.data)
        console.log(response.data.count)
        setTotalPages(Math.ceil(7 / itemsPerPage));
        setCurrentPage(page);
      }else{
        setError(response?.message || 'Error occurred while Fetching laptops');
      }
    }catch(error){
      setError(error?.message || 'An error occurred');
    }
  }

  useEffect(() => {
    
    getEmployees(currentPage, itemsPerPage)
  
  },[currentPage])

  const handlePageChange = (pageNumber) => {
    getEmployees(pageNumber, itemsPerPage);
  };
  
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
              <Table.HeadCell>Position</Table.HeadCell>
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
                  {item.position}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.phone}
                </Table.Cell>
                
                
                <Table.Cell>
                  <a href={`/dashboard/EditEmployee/${item.id}`} className="font-medium flex text-cyan-600 hover:underline dark:text-cyan-500">
                     <RiEditLine />
                  </a>
                  
                </Table.Cell>
                <Table.Cell>
                  <button href={'#'} className="font-medium text-red-600 hover:underline dark:text-cyan-500" onClick={()=>{console.log(!isModalOpen)}} >
                    <RiDeleteBin6Line />
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
       {/* Pagination Controls */}
       <div className="flex justify-center mt-4  ">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            className={`mx-1 px-3 py-1 border rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
            }`}
          >
            {index + 1}
          </button>
        ))}
        </div>
    </div>
  )
}

export default Employee