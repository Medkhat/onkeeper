import {
    addCatItem,
    getCertainCategory,
    getCategories,
    getProducts,
    setModalState,
} from "../../../redux/menu-reducer";
import Categories from "./Categories";
import { connect } from "react-redux";

let mapStateToProps = (state) => ({
    categories: state.menuReducer.categories,
    currentCategory: state.menuReducer.currentCategory,
});

let mapDispatchToProps = {
    addCatItem,
    getCertainCategory,
    getCategories,
    getProducts,
    setModalState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
