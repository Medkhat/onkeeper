import { addCatItemActionCreator, updateNewCategoryTiteActionCreator } from '../../../data/menu-reducer'
import Categories from './Categories'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    categories: state.menuReducer.categories,
    newCategoryTitle: state.menuReducer.newCategoryTitle
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewCategoryItem: (newItemTitle) => {
      dispatch(updateNewCategoryTiteActionCreator(newItemTitle))
    },
    addCategoryItem: () => {
      dispatch(addCatItemActionCreator())
    }
  }
}

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories)

export default CategoriesContainer;