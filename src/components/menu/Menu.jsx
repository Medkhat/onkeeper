import React from 'react'
import m from './Menu.module.css'
import CategoriesContainer from './categories/CategoriesContainer'
import ProductsContainer from './products/ProductsContainer'
import * as axios from 'axios'

class Menu extends React.Component {

  componentDidMount() {
    axios.get("http://admin07.pythonanywhere.com/admin_rest/products/")
      .then(response => {
        this.props.getProducts(response.data)
      })
  }

  render() {
    return (
      <div className={m.content}>
        <CategoriesContainer />
        <ProductsContainer />
      </div>
    )
  }
}

export default Menu;