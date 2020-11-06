import { connect } from "react-redux";
import { addProduct } from "../../../redux/menu-reducer";
import { setProductModalState } from "../../../redux/modal-reducer";
import Products from "./Products";

let mapStateToProps = (state) => {
    return {
        products: state.menuReducer.products,
        modalState: state.modalReducer.productsModalState,
    };
};

const ProductsContainer = connect(mapStateToProps, {
    setProductModalState,
    addProduct,
})(Products);

export default ProductsContainer;
