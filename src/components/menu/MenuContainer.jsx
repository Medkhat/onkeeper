import { connect } from "react-redux";
import Menu from "./Menu";
import {
  getProductsAC,
  getCategoryAC,
  toggleLoaderAC
} from "../../data/menu-reducer";

let mapStateToProps = (state) => {
  return {
    isFetching: state.menuReducer.isFetching,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (products) => {
      dispatch(getProductsAC(products))
    },
    getCategories: (categories) => {
      dispatch(getCategoryAC(categories))
    },
    toggleLoader: (isFetching) => {
      dispatch(toggleLoaderAC(isFetching))
    }
  }
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu)
export default MenuContainer