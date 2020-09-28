import { changeNewProductForm, addNewProduct } from "../../../../redux/menu-reducer"
import { connect } from "react-redux"
import AddProduct from "./AddProduct"

let mapStateToProps = state => ({
  newProductTitle: state.menuReducer.newProductTitle,
  newProductPrice: state.menuReducer.newProductPrice,
  newProductDesc: state.menuReducer.newProductDesc
})

let mapDispatchToProps = {
  updateNewProductData: changeNewProductForm, addNewProduct
}

const AddProductContainer = connect(mapStateToProps, mapDispatchToProps)(AddProduct)

export default AddProductContainer