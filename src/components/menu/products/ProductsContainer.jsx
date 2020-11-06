import { connect } from "react-redux";
import { setProductModalState } from "../../../redux/modal-reducer";
import Products from "./Products";

let mapStateToProps = (state) => {
    return {
        products: state.menuReducer.products,
        modalState: state.modalReducer.productsModalState,
    };
};
const ProductsContainer = connect(mapStateToProps, { setProductModalState })(
    Products
);

export default ProductsContainer;
