import {
    getCategories,
    getProducts,
    deleteCategory,
    addCategory,
    editCategory,
    getOneCategoryProducts,
} from "../../../redux/category-reducer";
import Categories from "./Categories";
import { connect } from "react-redux";
import { setCategoryModalState } from "../../../redux/modal-reducer";

let mapStateToProps = (state) => ({
    categories: state.categoryReducer.categories,
    modalState: state.modalReducer.categoryModalState,
    loaderOnModalBtn: state.categoryReducer.loaderOnModalBtn,
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
