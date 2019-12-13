import React from 'react'
import m from '../Menu.module.css'
import CategoryItem from './CategoryItem'

const Categories = (props) => {
  let categoryItems = props.categories.map(item => <CategoryItem name={item.name} href={item.id}/>)
  return(
    <div className={m.category_block}>
      <h3 className={m.title}>Категории</h3>
      <div className={m.category_items}>
        {categoryItems}
        <div className={m.category_input}>
          <input type="text" placeholder="Добавить категорию..."/>
        </div>
      </div>
    </div>
  );
}

export default Categories;