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
      <span
        className={o.badges}
        style={{
          backgroundColor: props.bgColor,
          color: props.bgColor === "#fcf832" ? "#000" : "#fff"
        }}
      >
        {props.badges}
      </span>
    </button>
  );
}

const TableTabs = () => {
  return (
    <div className={o.btns}>
      <TableTabButton btnText="Новые заказы" badges="6" bgColor="#fcf832" />
      <TableTabButton btnText="Сделанные заказы" badges="28" bgColor="#ff0048" />
      <TableTabButton btnText="Закрытие счета" badges="6" bgColor="#3238f2" />
      <TableTabButton btnText="Пустые стола" badges="5" bgColor="#62cc27" />
    </div>
  )
}

export default TableTabs