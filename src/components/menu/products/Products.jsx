import React from 'react'
import m from '../Menu.module.css'
import ProductItem from './ProductItem'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'

class Products extends React.Component {

  componentDidMount() {
    axios.get("http://admin07.pythonanywhere.com/admin_rest/products/")
      .then(response => {
        this.props.getProducts(response.data)
      })
  }

  render() {
    let productItems = this.props.products.map(item => {
      return <ProductItem key={item.id} name={item.name} href={item.category} image={item.image} />
    })
    return (
      <div className={m.products}>
        {productItems}
        <div className={m.item_card}>
          <NavLink to="/products/add-product" className={m.product_name}>Добавить блюдо</NavLink>
        </div>
      </div>
    )
  }
}

export default Products;