import React from 'react'
import m from '../Menu.module.css'
import { NavLink } from 'react-router-dom'

const CategoryItem = (props) => {
  return (
    <div
      className={m.item_block}
      id={props.categoryId}
      onClick={props.onclickEvent}
    >
      <NavLink to={'/products/' + props.categoryId} className={m.item}>
        {props.name}
      </NavLink>
      <div className={m.item_btns}>
        <button type="button">e</button>
        <button type="button">d</button>
      </div>
    </div>
  );
}

export default CategoryItem;