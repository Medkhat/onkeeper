import React from 'react'
import m from '../Menu.module.css'
import ProductItem from './ProductItem'
import { NavLink } from 'react-router-dom'

class Products extends React.Component {
  render() {
    return (
      <div className={m.products}>
        {
          this.props.products.map((item) => {
            return <ProductItem key={item.id} name={item.name} href={item.category} image={item.image} />
          })
        }
        <div className={m.item_card}>
          <NavLink to="/products/add-product" className={m.product_name}>Добавить блюдо</NavLink>
        </div>
      </div>
    )
  }
}

export default Products;