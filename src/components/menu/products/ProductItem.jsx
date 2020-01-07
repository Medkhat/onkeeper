import React from 'react'
import m from '../Menu.module.css'
import { NavLink } from 'react-router-dom'

const ProductItem = (props) => {
  return (
    <div className={m.item_card}>
      <img src={props.img} alt="PRODUCT_IMG" />
      <NavLink to={props.href} className={m.product_name}>{props.title}</NavLink>
      <div className={m.delete_btn}>
        <button type="button">Удалить</button>
      </div>
    </div>
  );
}

export default ProductItem;