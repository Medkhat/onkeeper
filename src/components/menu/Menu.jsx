import React from 'react'
import m from './Menu.module.css'
import Categories from './categories/Categories'
import Products from './products/Products'

const Menu = (props) => {
  return (
    <div className={m.content}>
      <Categories 
        categories={props.categories}
        newCategoryTitle={props.newCategoryTitle}
        addCatItem={props.addCatItem}
        updateNewCategoryTitle={props.updateNewCategoryTitle}
      />
      <Products products={props.products}/>
    </div>
  );
}

export default Menu;