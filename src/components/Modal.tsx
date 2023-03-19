import React from "react";
import { useProductsContext } from "../context/ProductsContextProvider";
import AddOrEditProduct from "./AddOrEditProduct";

const Modal = () => {
  const { mode, loading } = useProductsContext();
  return (
    <div>{mode === "edit" && loading ? <div className="bg-black text-white fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center text-4xl font-bold">در حال پردازش...</div> : <AddOrEditProduct />}</div>
  );
};

export default Modal;
