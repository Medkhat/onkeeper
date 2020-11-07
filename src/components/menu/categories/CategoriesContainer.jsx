import {
    getCategories,
    deleteCategory,
    addCategory,
    editCategory,
    getOneCategoryProducts,
} from "../../../redux/category-reducer";
import {
    getProducts,
    setCurrentCategory,
} from "../../../redux/product-reducer";
import Categories from "./Categories";
import { connect } from "react-redux";
import { setCategoryModalState } from "../../../redux/modal-reducer";

let mapStateToProps = (state) => ({
    categories: state.categoryReducer.categories,
    modalState: state.modalReducer.categoryModalState,
    loaderOnModalBtn: state.categoryReducer.loaderOnModalBtn,
    isFetching: state.categoryReducer.isFetching,
    currentCategory: state.productReducer.currentCategory,
});
let mapDispatchToProps = {
    getCategories,
    getProducts,
    setCategoryModalState,
    deleteCategory,
    addCategory,
    editCategory,
    getOneCategoryProducts,
    setCurrentCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
