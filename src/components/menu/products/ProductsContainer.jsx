import { connect } from "react-redux";
import {
    addProduct,
    deleteProduct,
    editProduct,
} from "../../../redux/product-reducer";
import { setProductModalState } from "../../../redux/modal-reducer";
import Products from "./Products";

let mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
        IsFetching: state.productReducer.loaderOnModalBtn,
        modalState: state.modalReducer.productsModalState,
        currentCategory: state.productReducer.currentCategory,
    };
};

const ProductsContainer = connect(mapStateToProps, {
    setProductModalState,
    addProduct,
    editProduct,
    deleteProduct,
})(Products);
export default ProductsContainer;
