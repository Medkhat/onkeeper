//import React from 'react'
import {
  updateNewEmployeeNameCreator,
  addNewEmployeeCreator,
  updateNewEmployeeSalaryCreator
} from '../../data/personal-reducer'
import PersonalForm from './PersonalForm'
import { connect } from 'react-redux'

// const PersonalFormContainer = (props) => {

//   let addNewEmplayee = () => {
//     props.store.dispatch(addNewEmployeeCreator())
//   }

//   let updateNewEmployeeName = (newEmployeeName) => {
//     let action = updateNewEmployeeNameCreator(newEmployeeName)
//     props.store.dispatch(action)
//   }

//   let updateNewEmployeeSalary = (newEmployeeSalary) => {
//     let action = updateNewEmployeeSalaryCreator(newEmployeeSalary)
//     props.store.dispatch(action)
//   }

//   return <PersonalForm
//     updateNewEmployeeSalary={updateNewEmployeeSalary}
//     updateNewEmployeeName={updateNewEmployeeName}
//     addNewEmplayee={addNewEmplayee}
//   />
// }

let mapStateToProps = (state) => {
  return {

  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewEmployeeSalary: (newEmployeeSalary) => {
      dispatch(updateNewEmployeeSalaryCreator(newEmployeeSalary))
    },
    updateNewEmployeeName: (newEmployeeName) => {
      dispatch(updateNewEmployeeNameCreator(newEmployeeName))
    },
    addNewEmplayee: () => {
      dispatch(addNewEmployeeCreator())
    },
  }
}

const PersonalFormContainer = connect(mapStateToProps, mapDispatchToProps)(PersonalForm)

export default PersonalFormContainer
