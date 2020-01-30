import React from 'react'
import m from './Menu.module.css'
import CategoriesContainer from './categories/CategoriesContainer'
import ProductsContainer from './products/ProductsContainer'
import * as axios from 'axios'
import Preloader from '../preloader/Preloader'

class Menu extends React.Component {
  componentDidMount() {
    this.props.toggleLoader(true)
    axios.get("http://admin07.pythonanywhere.com/admin_rest/products/")
      .then(response => {
        this.props.getProducts(response.data)
      })

    axios.get("http://admin07.pythonanywhere.com/admin_rest/category/")
      .then(response => {
        this.props.toggleLoader(false)
        this.props.getCategories(response.data)
      })
  }

  render() {
    return (
      <div className={m.content}>
        {this.props.isFetching ? <Preloader /> : null}
        <CategoriesContainer />
        <ProductsContainer />
      </div>
    )
  }
}

export default Menu;