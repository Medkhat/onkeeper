import {
    getCertainCategory,
    getCategories,
    getProducts,
    setModalState,
    deleteCategory,
} from "../../../redux/menu-reducer";
import Categories from "./Categories";
import { connect } from "react-redux";

let mapStateToProps = (state) => ({
    categories: state.menuReducer.categories,
    currentCategory: state.menuReducer.currentCategory,
});
let mapDispatchToProps = {
    getCertainCategory,
    getCategories,
    getProducts,
    setModalState,
    deleteCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
