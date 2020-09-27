import React from 'react'
import { Route } from 'react-router-dom'

import m from './Menu.module.css'
import CategoriesContainer from './categories/CategoriesContainer'
import ProductsContainer from './products/ProductsContainer'
import Preloader from '../common/preloader/Preloader'
import AddProductContainer from './products/add-product/AddProductContainer'

class Menu extends React.Component {
  componentDidMount() {
    this.props.getProducts()
    this.props.getCategories()
  }

  render() {
    return (
      <div className={m.content}>
        {this.props.isFetching ? <Preloader /> : null}
        <CategoriesContainer />
        <div className={m.menu_content}>
          <Route exact path='/products' render={() => <ProductsContainer />} />
          <Route exact path='/products/add-product' render={() => <AddProductContainer />} />
        </div>
      </div>
    )
  }
}

export default Menu;