import { connect } from "react-redux";
import Products from "./Products";
import { getProductsAC } from "../../../data/menu-reducer";

let mapStateToProps = state => {
  return {
    products: state.menuReducer.products
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (products) => {
      dispatch(getProductsAC(products))
    }
  }
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products)

export default ProductsContainer