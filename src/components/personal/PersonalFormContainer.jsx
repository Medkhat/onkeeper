import {
  addNewEmployeeAC,
  universalAC,
} from '../../data/personal-reducer'
import PersonalForm from './PersonalForm'
import { connect } from 'react-redux'

let mapStateToProps = (state) => ({
  newEmployeeName: state.personalReducer.newEmployeeName,
  newEmployeeSalary: state.personalReducer.newEmployeeSalary,
  newEmployeeLogin: state.personalReducer.newEmployeeLogin,
  newEmployeePassword: state.personalReducer.newEmployeePassword,
  newEmployeePhone: state.personalReducer.newEmployeePhone,
  newEmployeeEmail: state.personalReducer.newEmployeeEmail,
  newEmployeeEmploymentDate: state.personalReducer.newEmployeeEmploymentDate,
})


let mapDispatchToProps = (dispatch) => {
  return {
    updateNewEmployeeData: (type, newEmployeeActionKey) => {
      dispatch(universalAC(type, newEmployeeActionKey))
    },
    addNewEmployee: () => {
      dispatch(addNewEmployeeAC())
    }
  }
}

const PersonalFormContainer = connect(mapStateToProps, mapDispatchToProps)(PersonalForm)

export default PersonalFormContainer
