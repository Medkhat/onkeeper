import React from 'react'
import p from './Personal.module.css'
import def_user from '../../img/user.png'

const PersonalForm = () => {
  return (
    <div className={p.personal_form}>
      <div className={p.upload_img}>
        <img src={def_user} alt="DEFAULT_USER" />
      </div>
    </div>
  )
}

export default PersonalForm
