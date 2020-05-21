import React from 'react'
import m from '../Menu.module.css'
import ProductItem from './ProductItem'
import { NavLink } from 'react-router-dom'
import plusIcon from './../../../img/plus.png'

class Products extends React.Component {
  render() {
    return (
      <div className={m.products}><div className={`${m.item_card} ${m.add_product}`}>
        <NavLink to="/products/add-product">
          <img src={plusIcon} className={m.plus} alt="ADD_PRODUCT" />
        </NavLink>
      </div>
        {
          this.props.products.map((item) => {
            return <ProductItem key={item.id} name={item.name} href={item.category} image={item.image} />
          })
        }

      </div>
    )
  }
}

export default Products;