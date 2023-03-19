import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { IAddProduct, IContext, IProps, IState } from "./types";


const ProductsContext = createContext({} as IContext);

const ProductsContextProvider = ({ children }: IProps) => {
  const [state, setState] = useState<IState>({
    pageNo: 1,
    products: [],
    mode: "add",
    isOpenModal: false,
    text: "",
    loading: false,
    edit: {
      id: null,
      data: null,
    },
    search: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:4000/products");
      setState((prevState) => ({ ...prevState, products: data }));
    };
    fetchProducts();
  }, []);

  // delete product
  const deleteProduct = async (id: number) => {
    axios
      .delete(`http://localhost:4000/products/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  // add product
  const addProduct = async (values: IAddProduct) => {
    axios
      .post("http://localhost:4000/products/", values)
      .then(() => {
        setState({ ...state, isOpenModal: false });
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  //edit product
  const editProduct = async (values: IAddProduct) => {
    axios
      .put(`http://localhost:4000/products/${state.edit.id}`, values)
      .then(() =>
        setState((prevState) => ({
          ...prevState,
          isOpenModal: false,
          mode: "add",
        }))
      );
    window.location.reload();
  };

  // close modal
  const handleCloseAddOrEditProduct = () => {
    setState((prevState) => ({ ...prevState, isOpenModal: false }));
  };

  // open modal
  const handleOpenAddOrEditProduct = () => {
    setState({ ...state, isOpenModal: true });
  };

  // handle edit product
  const handleEditProduct = async (id: number) => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
      isOpenModal: true,
      mode: "edit",
    }));
    const { data } = await axios.get(`http://localhost:4000/products/${id}`);
    setState((prevState) => ({
      ...prevState,
      loading: false,
      edit: { id, data },
    }));
  };


  if (!state.products) return <h1>loading....</h1>;

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        deleteProduct,
        addProduct,
        editProduct,
        handleCloseAddOrEditProduct,
        handleOpenAddOrEditProduct,
        handleEditProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);

export default ProductsContextProvider;
