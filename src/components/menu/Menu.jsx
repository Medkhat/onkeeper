import React from 'react'
import m from './Menu.module.css'
import Categories from './Categories'
import Products from './Products'

const Menu = () => {
  return (
    <div className={m.content}>
      <Categories />
      <Products />
    </div>
  );
}

export default Menu;