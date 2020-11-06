import {
    getCertainCategory,
    getCategories,
    getProducts,
    deleteCategory,
    addCategory,
    editCategory,
} from "../../../redux/menu-reducer";
import Categories from "./Categories";
import { connect } from "react-redux";
import { setCategoryModalState } from "../../../redux/modal-reducer";

let mapStateToProps = (state) => ({
    categories: state.menuReducer.categories,
    currentCategory: state.menuReducer.currentCategory,
    modalState: state.modalReducer.categoryModalState,
    loaderOnModalBtn: state.menuReducer.loaderOnModalBtn,
});
let mapDispatchToProps = {
    getCertainCategory,
    getCategories,
    getProducts,
    setCategoryModalState,
    deleteCategory,
    addCategory,
    editCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
