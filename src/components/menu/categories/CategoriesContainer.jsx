import {
  addCatItemActionCreator,
  updateNewCategoryTiteActionCreator,
  getCertainCategoryAC,
  getCategoryAC
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

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewCategoryItem: (newItemTitle) => {
      dispatch(updateNewCategoryTiteActionCreator(newItemTitle))
    },
    addCategoryItem: () => {
      dispatch(addCatItemActionCreator())
    },
    getCertainCategory: (currentCategory) => {
      dispatch(getCertainCategoryAC(currentCategory))
    },
    getCategories: (categories) => {
      dispatch(getCategoryAC(categories))
    }
  }
}

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories)

export default CategoriesContainer;