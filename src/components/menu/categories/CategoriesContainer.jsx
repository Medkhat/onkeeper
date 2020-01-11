import React from 'react'
import { addCatItemActionCreator, updateNewCategoryTiteActionCreator } from '../../../data/menu-reducer'
import Categories from './Categories'

const CategoriesContainer = (props) => {

  let addCategoryItem = () => {
    props.store.dispatch(addCatItemActionCreator())
  }

  let updateNewCategoryItem = (newItemTitle) => {
    let action = updateNewCategoryTiteActionCreator(newItemTitle)
    props.store.dispatch(action)
  }

  return <Categories
    updateNewCategoryItem={updateNewCategoryItem}
    addCategoryItem={addCategoryItem}
    categories={props.store.getState().menuReducer.categories}
    newCategoryTitle={props.store.getState().menuReducer.newCategoryTitle}
  />
}

export default CategoriesContainer;