import React from 'react'
import m from './Menu.module.css'
import Categories from './categories/Categories'
import Products from './products/Products'

const Menu = (props) => {
  return (
    <div className={m.content}>
      <Categories categories={props.categories}/>
      <Products products={props.products}/>
    </div>
  );
}

export default Menu;