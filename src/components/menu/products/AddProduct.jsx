import React from 'react'
import add_prod from './AddProduct.module.css'

const AddProduct = () => {
  return (
    <div className={add_prod.content}>
      <div className={add_prod.form}>
        Inputs
      </div>
      <div className={add_prod.img_form}>
        Img Form
      </div>
    </div>
  )
}

export default AddProduct;