import AddOrEditProduct from "./components/AddOrEditProduct";
import Modal from "./components/Modal";
import ProductList from "./components/ProductList";
import ProductsContextProvider from "./context/ProductsContextProvider";

const App = () => {
  return (
    <ProductsContextProvider>
      <div className="mt-20">
        <Modal />
        <ProductList />
      </div>
    </ProductsContextProvider>
  );
};

export default App;
