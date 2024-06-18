import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from "flowbite-react";
import {useEffect,useState} from 'react'
import axios from 'axios'
import { Modal } from 'flowbite-react';
import AppServices from '../services'
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";



const Borrow = () => {
 
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 mt-10 rounded-lg h-fit p-10">
       <h2>Borrow</h2>
    </div>
  )
}

export default Borrow