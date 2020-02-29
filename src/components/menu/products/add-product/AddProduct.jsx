import React from 'react'
import add_prod from './AddProduct.module.css'
import img_icon from '../../../../img/add_img.png'

const ProductImages = () => {
  return (
    <div className={add_prod.img_form_content}>
      <div className={add_prod.upload_img}>
        <label htmlFor="upload_img">
          <img src={img_icon} alt="IMG_ICON" />
          <span>Добавить изображение</span>
        </label>
        <input type="file" id="upload_img" style={{ display: 'none' }} />
      </div>
    </div>
  )
}

const ProductFormInput = props => {
  return (
    <div className={add_prod.inputs}>
      <input type={props.type} className={add_prod.name_desc} id={props.id} placeholder={props.placeholder} />
    </div>
  )
}

const AddProduct = () => {

  let inputProps = [
    { id: 1, type: "text", placeholder: "Название блюда / напитка", },
    { id: 2, type: "number", placeholder: "0.00", },
  ]

  let ProductFormInputs = inputProps.map(item => {
    return <ProductFormInput
      id={item.id}
      type={item.type}
      placeholder={item.placeholder}
    />
  })

  return (
    <div className={add_prod.wrap}>
      <h3 className={add_prod.h3}>Добавить новое блюдо</h3>
      <div className={add_prod.content}>
        <div className={add_prod.form}>
          {ProductFormInputs}
          <div className={add_prod.inputs}>
            <textarea className={add_prod.name_desc} name="good_desc" id="good_desc" rows="7" placeholder="Описание"></textarea>
          </div>
        </div>
        <div className={add_prod.img_form}>
          <ProductImages />
        </div>
      </div>
    </div>
  )
}

export default AddProduct;