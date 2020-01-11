import React from 'react'
import m from './Menu.module.css'
import Products from './products/Products'
import CategoriesContainer from './categories/CategoriesContainer'

const Menu = (props) => {
  return (
    <div className={m.content}>
      <CategoriesContainer store={props.store} />
      <Products products={props.store.getState().menuReducer.products} />
    </div>
  );
}

export default Menu;