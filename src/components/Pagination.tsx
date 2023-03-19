import React from "react";

interface IProps {
  totalProducts: number;
  productsPerPage: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

const Pagination = ({
  totalProducts,
  productsPerPage,
  paginate,
  currentPage,
  setCurrentPage,
}: IProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex items-center rounded-md">
        <li
          onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
          className={`text-gray-500 bg-white border cursor-pointer transition-all duration-300 px-3 py-2 leading-tight hover:text-gray-700 ${
            currentPage === 1 ? "bg-gray-300" : ""
          }`}
        >
          قبلی
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`cursor-pointer transition-all duration-300 px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
              currentPage === number
                ? "text-blue-600 bg-blue-200 border border-blue-300 hover:bg-blue-400 hover:text-white"
                : "text-gray-500 bg-white border"
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
        <li
          onClick={() =>
            Math.ceil(totalProducts / productsPerPage) !== currentPage &&
            setCurrentPage(currentPage + 1)
          }
          className={`text-gray-500 bg-white border cursor-pointer transition-all duration-300 px-3 py-2 leading-tight hover:text-gray-700 ${
            Math.ceil(totalProducts / productsPerPage) === currentPage
              ? "bg-gray-300"
              : ""
          }`}
        >
          بعدی
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
