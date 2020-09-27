import { connect } from "react-redux";
import Menu from "./Menu";
import {
  getProducts,
  getCategories
} from "../../data/menu-reducer";

let mapStateToProps = (state) => {
  return {
    isFetching: state.menuReducer.isFetching,
  }
}

let mapDispatchToProps = {
  getProducts, getCategories
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu)
export default MenuContainer