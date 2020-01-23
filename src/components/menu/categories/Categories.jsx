import React from 'react'
import m from '../Menu.module.css'
import CategoryItem from './CategoryItem'
import * as axios from 'axios'

class Categories extends React.Component {

  addCatItemFunc = () => {
    this.props.addCategoryItem()
  }

  onCategoryTitleChange = (e) => {
    let newItemTitle = e.target.value
    this.props.updateNewCategoryItem(newItemTitle)
  }

  onCategoryItemClick = (e) => {
    const categoryId = parseInt(e.target.id)
    if (this.props.currentCategory !== categoryId) {
      this.props.getCertainCategory(categoryId)
      axios.get(`http://admin07.pythonanywhere.com/admin_rest/restorans/1/category/${categoryId}`)
        .then(response => {
          this.props.getProducts(response.data)
        })
    }
  }

  render() {
    let categoryItems = this.props.categories.map(item => {
      return <CategoryItem
        name={item.name}
        key={item.id}
        categoryId={item.id}
        onclickEvent={this.onCategoryItemClick}
      />
    })

    return (
      <div className={m.category_block}>
        <h3 className={m.title}>Категории</h3>
        <div className={m.category_items}>
          {categoryItems}
          <div className={m.category_input}>
            <input
              type="text"
              value={this.props.newCategoryTitle}
              onChange={this.onCategoryTitleChange}
              placeholder="Добавить категорию..."
            />
            <button
              type="button"
              onClick={this.addCatItemFunc}
            >Добавить</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Categories;