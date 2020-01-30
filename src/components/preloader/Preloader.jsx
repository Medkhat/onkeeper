import React from 'react'
import p from './Preloader.module.css'
import loader from '../../img/loader.svg'

const Preloader = () => {
  return (
    <div className={p.preloader}>
      <img src={loader} className={p.loader} alt="LOADER" />
    </div>
  )
}

export default Preloader