import { connect } from "react-redux";
import Menu from "./Menu";
import {
  getProducts,
  getCategories
} from "../../redux/menu-reducer";
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    isFetching: state.menuReducer.isFetching,
  }
}

let mapDispatchToProps = {
  getProducts, getCategories
}

const MenuContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Menu)
export default MenuContainer