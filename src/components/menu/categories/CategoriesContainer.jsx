//import React from 'react'
import { addCatItemActionCreator, updateNewCategoryTiteActionCreator } from '../../../data/menu-reducer'
import Categories from './Categories'
import { connect } from 'react-redux';

// const CategoriesContainer = (props) => {

//   let addCategoryItem = () => {
//     props.store.dispatch(addCatItemActionCreator())
//   }

//   let updateNewCategoryItem = (newItemTitle) => {
//     let action = updateNewCategoryTiteActionCreator(newItemTitle)
//     props.store.dispatch(action)
//   }

//   return <Categories
//     updateNewCategoryItem={updateNewCategoryItem}
//     addCategoryItem={addCategoryItem}
//     categories={props.store.getState().menuReducer.categories}
//     newCategoryTitle={props.store.getState().menuReducer.newCategoryTitle}
//   />
// }
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