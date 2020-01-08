import React from 'react'
import p from './Personal.module.css'
import def_user from '../../img/user.png'

const PersonalForm = () => {
  return (
    <div className={p.personal_form}>
      <div className={p.upload_img}>
        <img src={def_user} alt="DEFAULT_USER" />
        <label className={p.img_label}>
          Загрузить фото
          <input type="file" style={{ display: "none" }} />
        </label>
      </div>
      <div className={p.form_input}>
        <input type="text" placeholder="Логин..." />
      </div>
      <div className={p.form_input}>
        <input type="password" placeholder="Пароль..." />
      </div>
      <div className={p.form_input}>
        <input type="text" placeholder="Полное имя..." />
      </div>
      <div className={p.form_input}>
        <input type="number" placeholder="Номер телефона..." />
      </div>
      <div className={p.form_input}>
        <input type="email" placeholder="Email..." />
      </div>
    </div>
  )
}

export default PersonalForm
