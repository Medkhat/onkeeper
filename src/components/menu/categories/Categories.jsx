import React from 'react'
import m from '../Menu.module.css'
import CategoryItem from './CategoryItem'

const Categories = (props) => {
  let categoryItems = props.categories.map(item => <CategoryItem name={item.name} href={item.id}/>)

  let newCatItem = React.createRef();

  let addCatItem = () => {
    let itemTitle = newCatItem.current.value
    props.addCatItem(itemTitle)
  }

  return(
    <div className={m.category_block}>
      <h3 className={m.title}>Категории</h3>
      <div className={m.category_items}>
        {categoryItems}
        <div className={m.category_input}>
          <input type="text" ref={newCatItem} placeholder="Добавить категорию..."/>
          <button type="button" onClick={addCatItem}>Добавить</button>
        </div>
      </div>
    </div>
  );
}

export default Categories;