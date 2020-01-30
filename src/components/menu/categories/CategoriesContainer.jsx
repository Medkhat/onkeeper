import {
  addCatItem,
  updateNewCategoryTitle,
  getCertainCategory,
  getCategories
} from '../../../data/menu-reducer'
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
  updateNewCategoryTitle, addCatItem, getCertainCategory, getCategories
}

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories)

export default CategoriesContainer;