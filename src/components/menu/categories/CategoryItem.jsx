import React from 'react'
import m from '../Menu.module.css'

const CategoryItem = (props) => {
  return (
    <div
      className={m.item_block}
      id={props.categoryId}
      onClick={props.onclickEvent}
    >
      <div className={m.item}>
        {props.name}
      </div>
      <div className={m.item_btns}>
        <button type="button">e</button>
        <button type="button">d</button>
      </div>
    </div>
  );
}

export default CategoryItem;