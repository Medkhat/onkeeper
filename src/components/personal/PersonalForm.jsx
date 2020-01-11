import React from 'react'
import p from './Personal.module.css'
import def_user from '../../img/user.png'

const FormInputs = (props) => {
  return (
    <div className={p.form_input}>
      <label>
        {props.label} <br />
        <input onChange={props.onchangeEvent} type={props.type} placeholder={props.placeholder} />
      </label>
    </div>
  )
}

const SelectOption = (props) => {
  return <option value={props.value}>{props.option}</option>
}

const PersonalForm = (props) => {

  let onAddNewEmplayee = () => {
    props.addNewEmplayee()
  }

  let onChangeNameInput = (e) => {
    let newEmployeeName = e.target.value
    props.updateNewEmployeeName(newEmployeeName)
  }

  let onChangeSalaryInput = (e) => {
    let newEmployeeSalary = e.target.value
    props.updateNewEmployeeSalary(newEmployeeSalary)
  }

  return (
    <div className={p.personal_form}>
      <form>
        <div className={p.upload_img}>
          <img src={def_user} alt="DEFAULT_USER" />
          <label className={p.img_label}>
            Загрузить фото
            <input type="file" style={{ display: "none" }} />
          </label>
        </div>
        <FormInputs type="text" placeholder="login123" label="Логин" />
        <FormInputs type="password" placeholder="password123" label="Пароль" />
        <FormInputs onchangeEvent={onChangeNameInput} type="text" placeholder="Ф.И.О" label="Полное имя" />
        <FormInputs type="number" placeholder="+7 XXX XXX XXXX" label="Номер телефона" />
        <FormInputs type="email" placeholder="Email" label="Электронная почта" />
        <FormInputs type="date" label="Дата устройства на работу" />
        <select className={p.form_select} name="person_position" id="">
          <option selected>Должность</option>
          <SelectOption value="waiter" option="Официант" />
          <SelectOption value="security" option="Охрана" />
          <SelectOption value="cook" option="Повар" />
        </select>
        <select className={p.form_select} name="salary_type" id="">
          <option selected>Тип зарплаты</option>
          <SelectOption value="percent" option="Процент" />
          <SelectOption value="hourly" option="Часовой" />
          <SelectOption value="monthly" option="Месячный" />
        </select>
        <FormInputs type="number" onchangeEvent={onChangeSalaryInput} placeholder="0.00 тг" label="Заработная плата" />
        <div className={p.form_btn}>
          <button type="button" onClick={onAddNewEmplayee} className={p.add}>Добавить</button>
          <button type="reset" className={p.reset}>Отмена</button>
        </div>
      </form>
    </div>
  )
}

export default PersonalForm
