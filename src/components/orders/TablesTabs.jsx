import React from "react"
import o from "./Orders.module.css"

const TableTabButton = (props) => {
  return (
    <button
      type="button"
      className={o.btn}
      onClick={props.onTabBtnClick}
    >
      <span className={o.text}>{props.btnText}</span>
      <span className={o.newnotifs}>{props.newNotifs}</span>
    </button>
  );
}

const TableTabs = () => {
  return (
    <div className={o.btns}>
      <TableTabButton btnText="Новые заказы" newNotifs="6" />
      <TableTabButton btnText="Сделанные заказы" newNotifs="8" />
      <TableTabButton btnText="Закрытие счета" newNotifs="6" />
      <TableTabButton btnText="Пустые стола" newNotifs="5" />
    </div>
  )
}

export default TableTabs