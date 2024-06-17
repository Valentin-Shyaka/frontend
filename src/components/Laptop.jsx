import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'flowbite-react';
import AppServices from '../services';





const Laptop = () => {
  const [error, setError] = useState('');
  const [laptops, setLaptops] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5; // Number of items per page as per API default

  const getLaptops = async (page,limit) => {
    try {
      const response = await AppServices.getAllLaptops(page,itemsPerPage);
      if (response?.status === 200) {
        setLaptops(response.data.data);
        console.log(response.data)
        setTotalPages(Math.ceil(response.data.count / itemsPerPage));
        setCurrentPage(page);
      } else {
        setError(response?.message || 'Error occurred while fetching laptops');
      }
    } catch (error) {
      setError(error?.message || 'An error occurred')
    }
  };

  useEffect(() => {
    getLaptops(currentPage, itemsPerPage);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    getLaptops(pageNumber, itemsPerPage);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 mt-10 rounded-lg h-fit p-10">
      <div className="flex justify-center justify-items-center">
        <h3 className="text-xl font-bold">Category List</h3>
      </div>
      <Link
        to={'/dashboard/add_laptop'}
        className="border border-blue-500 bg-blue-500 p-2 rounded-md text-white outline-none"
      >
        Add Laptop
      </Link>
      <div className="overflow-x-auto mt-10">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Model Name</Table.HeadCell>
            <Table.HeadCell>Manufacturer</Table.HeadCell>
            <Table.HeadCell>Serial Number</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {laptops?.map((laptop) => (
              <Table.Row key={laptop.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {laptop.modelName}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {laptop.manufactureCompany}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {laptop.laptopSerialNumber}
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
      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
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
  );
};

export default Laptop;