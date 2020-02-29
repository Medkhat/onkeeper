import React from 'react'
import m from '../Menu.module.css'
import { NavLink } from 'react-router-dom'

const ProductItem = (props) => {
  return (
    <div className={m.item_card}>
      <img src={props.image} alt="PRODUCT_IMG" />
      <NavLink to={`${props.href}`} className={m.product_name}>{props.name}</NavLink>
      <span className={m.times}>&times;</span>
    </div>
  );
}

export default ProductItem;