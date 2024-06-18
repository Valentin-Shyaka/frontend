import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'flowbite-react';
import AppServices from '../services';
import { Modal } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import { Component } from './Modal';

const Books = () => {
  const [error, setError] = useState('');
  const [isOpen,setIsOpen]=useState(false)
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 4; // Number of items per page as per API default

  const getBooks = async (page, limit) => {
    try {
      const response = await AppServices.getAllBooks(page, itemsPerPage);
      if (response?.status === 200) {
        setBooks(response.data.data);
        setTotalPages(Math.ceil(response.data.count / itemsPerPage));
        setCurrentPage(page);
      } else {
        setError(response?.message || 'Error occurred while fetching books');
      }
    } catch (error) {
      setError(error?.message || 'An error occurred');
    }
  };

  console.log(isOpen)

  useEffect(() => {
    getBooks(currentPage, itemsPerPage);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    getBooks(pageNumber, itemsPerPage);
  };

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 mt-10 rounded-lg h-fit p-10">
      <div className="flex justify-center justify-items-center">
        <h3 className="text-xl font-bold">Book List</h3>
      </div>
      <Link
        to={'/dashboard/add_book'}
        className="border border-blue-500 bg-blue-500 p-2 rounded-md text-white outline-none float-right"
      >
        Add Book
      </Link>
      <div className="mt-10">
        <input
          type="text"
          placeholder="Search by book name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-3 py-1 border rounded"
        />
      </div>
      <div className="overflow-x-auto mt-4">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author</Table.HeadCell>
            <Table.HeadCell>Publisher</Table.HeadCell>
            <Table.HeadCell>Publication Year</Table.HeadCell>
            <Table.HeadCell>Subject</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {filteredBooks.map((book) => (
              <Table.Row key={book.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.name}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.author}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.publisher}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.publicationYear}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.subject}
                </Table.Cell>
                <Table.Cell>
                  <p href="#" className="font-medium cursor-pointer text-cyan-600 hover:underline dark:text-cyan-500" onClick={()=>setIsOpen(!isOpen)}>
                    Borrow
                  </p>
                </Table.Cell>
                <Table.Cell>
                  <p href="#" className="font-medium cursor-pointer text-red-600 hover:underline dark:text-red-500">
                    Return
                  </p>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Modal size="md" popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to Borrow or return this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure">
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray">
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
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

export default Books;