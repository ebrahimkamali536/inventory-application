import { PlusIcon } from "@heroicons/react/24/outline";
import { useProductsContext } from "../context/ProductsContextProvider";
import Pagination from "./Pagination";
import { useState } from "react";
const theadItems = [
  { id: 1, title: "عنوان" },
  { id: 2, title: "قیمت" },
  { id: 3, title: "تعداد" },
  { id: 5, title: "تغیرات" },
];

const ProductList = () => {
  const {
    products,
    deleteProduct,
    handleEditProduct,
    handleOpenAddOrEditProduct,
  } = useProductsContext();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="relative">
      <div className="container md:max-w-screen-lg mx-auto px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl font-bold">انبار داری محصول</h2>
          <button
            onClick={() => handleOpenAddOrEditProduct()}
            className="px-2.5 py-1.5 rounded-md text-white font-bold bg-primary flex items-center gap-x-2.5 text-sm"
          >
            <span>افزودن محصول</span>
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {theadItems.map((th) => (
                  <th key={th.id} scope="col" className="px-6 py-3 text-right">
                    {th.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((item) => (
                <tr key={item.id} className="bg-white border-b text-right">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.title}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.price}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.quantity}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-white text-xs whitespace-nowrap inline-flex items-center gap-x-2.5"
                  >
                    <button
                      onClick={() => handleEditProduct(item.id)}
                      className="bg-green px-2.5 py-1 rounded-sm"
                    >
                      ویرایش
                    </button>
                    <button
                      className="bg-red-500 px-2.5 py-1 rounded-sm"
                      onClick={() => deleteProduct(item.id)}
                    >
                      حذف
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="absolute -bottom-1/4 left-1/2 translate-x-[-50%]">
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProductList;
