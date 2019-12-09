import React from 'react'
import m from './Menu.module.css'

const CategoryItem = (props) => {
  return(
    <div className={m.item}>
      {props.name}
    </div>
  );
}

const Categories = () => {
  return(
    <div className={m.category_block}>
      <h3 className={m.title}>Категории</h3>
      <div className={m.category_items}>
        <CategoryItem name="Десерты"/>
        <CategoryItem name="Салаты"/>
        <CategoryItem name="Супы"/>
        <CategoryItem name="Холодные закуски"/>
      </div>
    </div>
  );
}

export default Categories;