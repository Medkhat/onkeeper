import React from 'react'
import Table from './Tables'
import TableData from './TableData'
import o from './Orders.module.css'
import TableTabs from './TablesTabs'

const Orders = () => {
  return (
    <div className={o.content}>
      <div className={o.left_block}>
        <TableTabs />
        <Table />
      </div>
      <div className={o.right_block}>
        <TableData />
      </div>
    </div>
  )
}

export default Orders;