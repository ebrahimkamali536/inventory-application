import { PlusIcon } from "@heroicons/react/24/outline";
import { useState, ChangeEvent, FormEvent } from "react";
import { useProductsContext } from "../context/ProductsContextProvider";
import { IAddProduct } from "../context/types";

const AddOrEditProduct = () => {
  const { edit, isOpenModal, addProduct, handleCloseAddOrEditProduct, mode, editProduct } =
    useProductsContext();
  const initialValues: IAddProduct = edit.data
    ? {
        title: edit.data.title,
        price: edit.data.price,
        quantity: edit.data.quantity,
      }
    : {
        title: "",
        price: "",
        quantity: null,
      };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValues(initialValues);
    if (mode === "edit") {
      editProduct(values)
    } else if (mode === "add") {
      addProduct(values);
    }
  };
  return (
    <div>
      <div className="z-10 relative">
        <div className="relative">
          {isOpenModal && (
            <div className="z-10 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between w-fll px-6 pt-6">
                <h3 className="font-bold text-2xl">اضافه کردن محصول</h3>
                <button
                  onClick={() => handleCloseAddOrEditProduct()}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="px-6 py-6 lg:px-8">
                <form className="space-y-6" action="#" onSubmit={submitHandler}>
                  {/* title section */}
                  <div>
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      عنوان محصول
                    </label>
                    <input
                      value={values.title}
                      onChange={handleInputChange}
                      type="text"
                      name="title"
                      id="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>

                  {/* price and quantity */}
                  <div className="flex items-center gap-x-4">
                    <div className="w-full">
                      <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        قیمت
                      </label>
                      <input
                        value={values.price}
                        onChange={handleInputChange}
                        type="number"
                        name="price"
                        id="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>

                    <div className="w-full">
                      <label
                        htmlFor="quantity"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        موجودی
                      </label>
                      <input
                        value={values.quantity}
                        onChange={handleInputChange}
                        type="number"
                        name="quantity"
                        id="quantity"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    ارسال اطلاعات
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
        <div
          onClick={() => handleCloseAddOrEditProduct()}
          className={`${
            isOpenModal
              ? "bg-black/60 top-0 left-0 bottom-0 right-0 h-screen w-full fixed"
              : "none z-200"
          }`}
        />
      </div>
    </div>
  );
};

export default AddOrEditProduct;
