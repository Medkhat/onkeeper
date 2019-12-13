import React from 'react'
import m from '../Menu.module.css'
import ProductItem from './ProductItem'

const Products = (props) => {
  let productItems = props.products.map(item => <ProductItem title={item.title} href={item.id} img={item.img}/>)
  return(
    <div className={m.products}>
      {productItems}
    </div>
  );
}

export  default Products;