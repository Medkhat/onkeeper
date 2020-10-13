import React from 'react'
import styles from './Preloader.module.css'
import loader_red from '../../../img/loader-red.svg'
import loader from '../../../img/loader.svg'

export const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img src={loader_red} className={styles.loader} alt="LOADER" />
    </div>
  )
}

export const LoaderToButton = () => {
  return <img src={loader} alt="LOADER" className={styles.button_loader}/>
}
