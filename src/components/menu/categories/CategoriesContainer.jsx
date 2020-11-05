import {
    getCertainCategory,
    getCategories,
    getProducts,
    setModalState,
    deleteCategory,
    addCategory,
    editCategory,
} from "../../../redux/menu-reducer";
import Categories from "./Categories";
import { connect } from "react-redux";

let mapStateToProps = (state) => ({
    categories: state.menuReducer.categories,
    currentCategory: state.menuReducer.currentCategory,
    modalState: state.menuReducer.modalState,
    addCategoryIsFetching: state.menuReducer.addCategoryIsFetching,
});
let mapDispatchToProps = {
    getCertainCategory,
    getCategories,
    getProducts,
    setModalState,
    deleteCategory,
    addCategory,
    editCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
