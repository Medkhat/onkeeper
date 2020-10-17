import {
    addCatItem,
    updateNewCategoryTitle,
    getCertainCategory,
    getCategories,
    getProducts,
    setModalState,
} from "../../../redux/menu-reducer";
import Categories from "./Categories";
import { connect } from "react-redux";

let mapStateToProps = (state) => ({
    categories: state.menuReducer.categories,
    newCategoryTitle: state.menuReducer.newCategoryTitle,
    currentCategory: state.menuReducer.currentCategory,
});

let mapDispatchToProps = {
    updateNewCategoryTitle,
    addCatItem,
    getCertainCategory,
    getCategories,
    getProducts,
    setModalState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
