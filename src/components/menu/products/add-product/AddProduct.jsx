import React from 'react'
import add_prod from './AddProduct.module.css'
import img_icon from '../../../../img/add_img.png'
import when_empty from '../../../../img/when_empty.png'

const WhenEmptyForm = () => {
  return (
    <div className={add_prod.empty_img_form}>
      <div className={add_prod.centered} style={{ backgroundImage: `url(${when_empty})` }}></div>
    </div>
  )
}

const ProductImages = (props) => {
  return (
    <div className={add_prod.img_form}>
      <div className={add_prod.upload_img}>
        <label htmlFor="upload_img">
          <img src={img_icon} alt="IMG_ICON" />
          <span>Добавить изображение</span>
        </label>
        <input type="file" id="upload_img" style={{ display: 'none' }} />
      </div>
      <WhenEmptyForm />
      <button type="button" onClick={props.onclickEvent} className={add_prod.btn}>Добавить</button>
    </div>
  )
}

const ProductFormInput = props => {
  return (
    <div className={add_prod.inputs}>
      <input
        type={props.type}
        className={add_prod.name_desc}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onchangeEvent}
        data-action={props.dataActionType}
        value={props.value}
      />
    </div>
  )
}

const AddProduct = (props) => {

  let onAddNewProduct = () => {
    props.addNewProduct()
  }

  let onChangeInputs = (e) => {
    let newProductActionKey = e.target.value
    let newProductActionType = e.target.dataset.action
    props.updateNewProductData(newProductActionType, newProductActionKey)
  }

  let inputProps = [
    { id: 1, type: "text", placeholder: "Название блюда / напитка", value: props.newProductTitle, onchangeEvent: onChangeInputs, dataActionType: "UPDATE_NEW_PRODUCT_TITLE" },
    { id: 2, type: "number", placeholder: "0.00", value: props.newProductPrice, onchangeEvent: onChangeInputs, dataActionType: "UPDATE_NEW_PRODUCT_PRICE" },
  ]

  let ProductFormInputs = inputProps.map(item => {
    return <ProductFormInput
      key={item.id}
      id={item.id}
      type={item.type}
      placeholder={item.placeholder}
      dataActionType={item.dataActionType}
      onchangeEvent={item.onchangeEvent}
      value={item.value}
    />
  })

  return (
    <div className={add_prod.wrap}>
      <h3 className={add_prod.h3}>Добавить новое блюдо</h3>
      <div className={add_prod.content}>
        <div className={add_prod.form}>
          {ProductFormInputs}
          <div className={add_prod.inputs}>
            <textarea
              className={add_prod.name_desc}
              name="good_desc"
              id="good_desc"
              rows="7"
              placeholder="Описание"
              data-action="UPDATE_NEW_PRODUCT_DESC"
              onChange={onChangeInputs}
              value={props.newProductDesc}
            ></textarea>
          </div>
        </div>
        <ProductImages onclickEvent={onAddNewProduct} />
      </div>
    </div>
  )
}

export default AddProduct;