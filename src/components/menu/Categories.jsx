import React from 'react'
import m from './Menu.module.css'
import {NavLink} from 'react-router-dom'

const CategoryItem = (props) => {
  return(
    <div className={m.item_block}>
      <NavLink to={props.href} className={m.item} activeClassName={m.active}>
        {props.name}
      </NavLink>
      <div className={m.item_btns}>
        <button type="button">e</button>
        <button type="button">d</button>
      </div>
    </div>
  );
}

const Categories = () => {
  let categories = [
    {id: 1, name: 'Десерты'},
    {id: 2, name: 'Салаты'},
    {id: 3, name: 'Супы'},
    {id: 4, name: 'Холодные закуски'},
    {id: 5, name: 'Другие'},
  ]
  return(
    <div className={m.category_block}>
      <h3 className={m.title}>Категории</h3>
      <div className={m.category_items}>
        <CategoryItem name="Десерты" href="" />
        <CategoryItem name="Салаты" href=""/>
        <CategoryItem name="Супы" href=""/>
        <CategoryItem name="Холодные закуски" href=""/>
        <div className={m.category_input}>
          <input type="text" placeholder="Добавить категорию..."/>
        </div>
      </div>
    </div>
  );
}

export default Categories;