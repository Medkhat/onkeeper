import React from 'react'
import m from '../Menu.module.css'
import CategoryItem from './CategoryItem'

const Categories = (props) => {

  let categoryItems = props.categories.map(item => {
    return <CategoryItem name={item.name} href={item.id} />
  })

  let newCatItem = React.createRef()

  let addCatItemFunc = () => {
    props.addCatItem()
  }

  let onCategoryTitleChange = () => {
    let newItemTitle = newCatItem.current.value
    props.updateNewCategoryTitle(newItemTitle)
  }

  return (
    <div className={m.category_block}>
      <h3 className={m.title}>Категории</h3>
      <div className={m.category_items}>
        {categoryItems}
        <div className={m.category_input}>
          <input
            type="text"
            ref={newCatItem}
            value={props.newCategoryTitle}
            onChange={onCategoryTitleChange}
            placeholder="Добавить категорию..."
          />
          <button
            type="button"
            onClick={addCatItemFunc}
          >Добавить</button>
        </div>
      </div>
    </div>
  );
}

export default Categories;