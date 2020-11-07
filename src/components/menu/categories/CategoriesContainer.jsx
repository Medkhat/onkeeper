import {
    getCategories,
    deleteCategory,
    addCategory,
    editCategory,
    getOneCategoryProducts,
} from "../../../redux/category-reducer";
import { getProducts } from "../../../redux/product-reducer";
import Categories from "./Categories";
import { connect } from "react-redux";
import { setCategoryModalState } from "../../../redux/modal-reducer";

let mapStateToProps = (state) => ({
    categories: state.categoryReducer.categories,
    modalState: state.modalReducer.categoryModalState,
    loaderOnModalBtn: state.categoryReducer.loaderOnModalBtn,
    isFetching: state.categoryReducer.isFetching,
});
let mapDispatchToProps = {
    getCategories,
    getProducts,
    setCategoryModalState,
    deleteCategory,
    addCategory,
    editCategory,
    getOneCategoryProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
