import { connect } from "react-redux";
import {
    addProduct,
    deleteProduct,
    editProduct,
} from "../../../redux/menu-reducer";
import { setProductModalState } from "../../../redux/modal-reducer";
import Products from "./Products";

let mapStateToProps = (state) => {
    return {
        products: state.menuReducer.products,
        IsFetching: state.menuReducer.loaderOnModalBtn,
        modalState: state.modalReducer.productsModalState,
    };
};

const ProductsContainer = connect(mapStateToProps, {
    setProductModalState,
    addProduct,
    editProduct,
    deleteProduct,
})(Products);
export default ProductsContainer;
