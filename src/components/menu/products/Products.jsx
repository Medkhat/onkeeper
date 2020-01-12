import React from 'react'
import m from '../Menu.module.css'
import ProductItem from './ProductItem'
import { NavLink } from 'react-router-dom'

const Products = (props) => {
  let productItems = props.products.map(item => {
    return <ProductItem
      key={item.id}
      title={item.title}
      href={item.id}
      img={item.img}
    />
  })
  return (
    <div className={m.products}>
      {productItems}
      <div className={m.item_card}>
        <NavLink to="/products/add-product" className={m.product_name}>Добавить блюдо</NavLink>
      </div>
    </div>
  );
}

export default Products;