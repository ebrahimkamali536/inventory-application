
export interface IProps {
  children: React.ReactNode;
}

export interface IAddProduct {
  title: string;
  price: string;
  quantity: any;
}

export interface IProduct extends IAddProduct {
  id: number;
}

export interface IState {
  pageNo: number;
  products: IProduct[];
  mode: "add" | "edit";
  isOpenModal: boolean;
  text: string;
  loading: boolean;
  edit: {
    data: null | any;
    id: null | number;
  };
  search: string;
}

export interface IContext extends IState {
  deleteProduct: (id: number) => void;
  addProduct: (values: IAddProduct) => void;
  editProduct: (values: IAddProduct) => void;
  handleCloseAddOrEditProduct: () => void;
  handleOpenAddOrEditProduct: () => void;
  handleEditProduct: (id: number) => void;
}
