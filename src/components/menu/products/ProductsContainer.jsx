import { connect } from "react-redux";
import {
    addProduct,
    deleteProduct,
    editProduct,
} from "../../../redux/product-reducer";
import {
    setDeleteProductModalState,
    setProductModalState,
} from "../../../redux/modal-reducer";
import Products from "./Products";

let mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
        IsFetching: state.productReducer.loaderOnModalBtn,
        modalState: state.modalReducer.productsModalState,
        currentCategory: state.productReducer.currentCategory,
        deleteProductModalState: state.modalReducer.deleteProductModalState,
    };
};

const ProductsContainer = connect(mapStateToProps, {
    setProductModalState,
    addProduct,
    editProduct,
    deleteProduct,
    setDeleteProductModalState,
})(Products);
export default ProductsContainer;
