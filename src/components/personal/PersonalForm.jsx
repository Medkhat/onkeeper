import React from 'react'
import p from './Personal.module.css'
import def_user from '../../img/user.png'

const FormInputs = (props) => {
  return (
    <div className={p.form_input}>
      <label>
        {props.label} <br />
        <input
          onChange={props.onchangeEvent}
          type={props.type}
          placeholder={props.placeholder}
          data-action={props.dataActionType}
          value={props.value}
        />
      </label>
    </div>
  )
}

const SelectOption = (props) => {
  return <option value={props.value}>{props.option}</option>
}

const PersonalForm = (props) => {

  let onAddNewEmployee = () => {
    props.addNewEmployee()
  }

  let onChangeInputs = (e) => {
    let newEmployeeActionKey = e.target.value
    let newEmployeeActionType = e.target.dataset.action
    props.updateNewEmployeeData(newEmployeeActionType, newEmployeeActionKey)
  }

  const inputProps = [
    { id: 1, type: "text", placeholder: "login123", label: "Логин", onchangeEvent: onChangeInputs, value: props.newEmployeeLogin, dataActionType: "UPDATE_NEW_EMPLOYEE_LOGIN" },
    { id: 2, type: "password", placeholder: "", label: "Пароль", onchangeEvent: onChangeInputs, value: props.newEmployeePassword, dataActionType: "UPDATE_NEW_EMPLOYEE_PASSWORD" },
    { id: 3, type: "text", placeholder: "Ф.И.О", label: "Полное имя", onchangeEvent: onChangeInputs, value: props.newEmployeeName, dataActionType: "UPDATE_NEW_EMPLOYEE_NAME" },
    { id: 4, type: "text", placeholder: "+7 XXX XXX XXXX", label: "Номер телефона", onchangeEvent: onChangeInputs, value: props.newEmployeePhone, dataActionType: "UPDATE_NEW_EMPLOYEE_PHONE" },
    { id: 5, type: "text", placeholder: "example@gmail.com", label: "Электронная почта", onchangeEvent: onChangeInputs, value: props.newEmployeeEmail, dataActionType: "UPDATE_NEW_EMPLOYEE_EMAIL" },
    { id: 6, type: "text", placeholder: "12.01.2020", label: "Дата устройства на работу", onchangeEvent: onChangeInputs, value: props.newEmployeeEmploymentDate, dataActionType: "UPDATE_NEW_EMPLOYEE_EMPLOYMENT_DATE" },
    { id: 7, type: "number", placeholder: "0.00 тг", label: "Заработная плата", onchangeEvent: onChangeInputs, value: props.newEmployeeSalary, dataActionType: "UPDATE_NEW_EMPLOYEE_SALARY" },
  ]

  let formInputs = inputProps.map(item => {
    return <FormInputs
      type={item.type}
      placeholder={item.placeholder}
      dataActionType={item.dataActionType}
      onchangeEvent={item.onchangeEvent}
      label={item.label}
      key={item.id}
      value={item.value}
    />
  })

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
        {formInputs}
        <select className={p.form_select} defaultValue="Должность" name="person_position">
          <SelectOption value="waiter" option="Официант" />
          <SelectOption value="security" option="Охрана" />
          <SelectOption value="cook" option="Повар" />
        </select>
        <select className={p.form_select} defaultValue="Тип зарплаты" name="salary_type">
          <SelectOption value="percent" option="Процент" />
          <SelectOption value="hourly" option="Часовой" />
          <SelectOption value="monthly" option="Месячный" />
        </select>
        <div className={p.form_btn}>
          <button type="button" onClick={onAddNewEmployee} className={p.add}>Добавить</button>
          <button type="reset" className={p.reset}>Отмена</button>
        </div>
      </form>
    </div>
  )
}

export default PersonalForm
