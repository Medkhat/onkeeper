import {
  addCatItem,
  updateNewCategoryTitle,
  getCertainCategory,
  getCategories,
  getProducts
} from '../../../redux/menu-reducer'
import Categories from './Categories'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    categories: state.menuReducer.categories,
    newCategoryTitle: state.menuReducer.newCategoryTitle,
    currentCategory: state.menuReducer.currentCategory
  }
}

let mapDispatchToProps = {
  updateNewCategoryTitle, addCatItem, getCertainCategory, getCategories, getProducts
}

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories)

export default CategoriesContainer;