import { connect } from "react-redux";
import Menu from "./Menu";
import { getProductsAC, getCategoryAC } from "../../data/menu-reducer";

let mapStateToProps = () => {
  return {}
}

let mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (products) => {
      dispatch(getProductsAC(products))
    },
    getCategories: (categories) => {
      dispatch(getCategoryAC(categories))
    }
  }
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu)
export default MenuContainer