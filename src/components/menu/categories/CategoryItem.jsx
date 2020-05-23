import React from 'react'
import m from '../Menu.module.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const CategoryItem = (props) => {
  return (
    <div
      className={m.item_block}
      id={props.categoryId}
      onClick={props.onclickEvent}
    >
      <NavLink to={'/products/' + props.categoryId} className={m.item}>
        {props.name}
      </NavLink>
      <div className={m.item_btns}>
        <button type="button">
          <FontAwesomeIcon
            icon={faPencilAlt}
            style={{
              fontSize: "16px"
            }}
          />
        </button>
        <button type="button">
          <FontAwesomeIcon
            icon={faTimesCircle}
            style={{
              fontSize: "16px"
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default CategoryItem;