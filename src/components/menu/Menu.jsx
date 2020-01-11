import React from 'react'
import m from './Menu.module.css'
import Products from './products/Products'
import CategoriesContainer from './categories/CategoriesContainer'

const Menu = () => {
  return (
    <div className={m.content}>
      <CategoriesContainer />
      <Products />
    </div>
  );
}

export default Menu;