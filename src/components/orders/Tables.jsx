import React from 'react'
import o from './Orders.module.css'

const TableItem = (props) => {
  return (
    <div className={o.item}>
      <h3>{props.title}</h3>

    </div>
  )
}

const Table = () => {
  return (
    <div className={o.card}>
      <TableItem title="Стол 1" content="" />
    </div>
  )
}

export default Table