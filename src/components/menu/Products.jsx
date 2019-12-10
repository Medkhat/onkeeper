import React from 'react'
import m from './Menu.module.css'
import {NavLink} from 'react-router-dom'

const ProductItem = (props) => {
  return(
    <div className={m.item_card}>
      <img src={props.img} alt="PRODUCT_IMG"/>
      <NavLink to={props.href} className={m.product_name}>{props.title}</NavLink>
      <div className={m.delete_btn}>
        <button type="button">Удалить</button>
      </div>
    </div>
  );
}

const Products = () => {
  let products = [
    {id: 1, title: 'Product 1', img: 'https://www.good-menu.ru/img/postre/tort-brauni63.jpg'},
    {id: 2, title: 'Product 2', img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/02/red-velvet-cake-slice-2.jpg'},
  ]

  let productItems = products
    .map(item => <ProductItem title={item.title} href={item.id} img={item.img}/>)
  
    return(
    <div className={m.products}>
      {productItems}
    </div>
  );
}

export  default Products;