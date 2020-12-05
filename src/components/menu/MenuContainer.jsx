import { connect } from "react-redux";
import Menu from "./Menu";
import { getProducts } from "../../redux/product-reducer";
import { getCategories } from "../../redux/category-reducer";
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { setProductModalState } from "../../redux/modal-reducer";

let mapStateToProps = (state) => {
    return {
        isFetching: state.productReducer.isFetching,
    };
};

let mapDispatchToProps = {
    getProducts,
    getCategories,
    setProductModalState,
};

const MenuContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Menu);
export default MenuContainer;
