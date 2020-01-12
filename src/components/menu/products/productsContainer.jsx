import { connect } from "react-redux";
import Products from "./Products";

let mapStateToProps = state => {
  return {
    products: state.menuReducer.products
  }
}

let mapDispatchToProps = () => {
  return {}
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products)

export default ProductsContainer