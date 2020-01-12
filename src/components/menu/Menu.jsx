import React from 'react'
import m from './Menu.module.css'
import CategoriesContainer from './categories/CategoriesContainer'
import ProductsContainer from './products/ProductsContainer'

const Menu = () => {
  return (
    <div className={m.content}>
      <CategoriesContainer />
      <ProductsContainer />
    </div>
  );
}

export default Menu;