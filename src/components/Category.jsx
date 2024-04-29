import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from "flowbite-react";
import {useEffect,useState} from 'react'
import axios from 'axios'


const Category = () => {
  const [category,setCategory]= useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/admin/category')
    .then(result =>{
      
        setCategory(result.data.Result.rows)
    }).catch(err => console.log(err))
  
  }, [category])
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 mt-10 rounded-lg h-fit p-10">
        <div className='flex justify-center justify-items-center '>
            <h3 className='text-xl font-bold'>Category List</h3>

        </div>
        <Link to={'/dashboard/add_category'} className=' border border-blue-500 bg-blue-500 p-2 rounded-md text-white outline-none'>Add Category</Link>
        <div className="overflow-x-auto mt-10">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Category name</Table.HeadCell>
             
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {category?.map((item) =>(
              
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.name}
                </Table.Cell>
                
                
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              ))}
             
            </Table.Body>
            </Table>
          
              
      </div>
    </div>
  )
}

export default Category