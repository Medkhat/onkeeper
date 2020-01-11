import React from 'react'
import {
  updateNewEmployeeNameCreator,
  addNewEmployeeCreator,
  updateNewEmployeeSalaryCreator
} from '../../data/personal-reducer'
import PersonalForm from './PersonalForm'

const PersonalFormContainer = (props) => {

  let addNewEmplayee = () => {
    props.store.dispatch(addNewEmployeeCreator())
  }

  let updateNewEmployeeName = (newEmployeeName) => {
    let action = updateNewEmployeeNameCreator(newEmployeeName)
    props.store.dispatch(action)
  }

  let updateNewEmployeeSalary = (newEmployeeSalary) => {
    let action = updateNewEmployeeSalaryCreator(newEmployeeSalary)
    props.store.dispatch(action)
  }

  return <PersonalForm
    updateNewEmployeeSalary={updateNewEmployeeSalary}
    updateNewEmployeeName={updateNewEmployeeName}
    addNewEmplayee={addNewEmplayee}
  />
}

export default PersonalFormContainer
