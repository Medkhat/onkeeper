import {
  updateNewEmployeeNameCreator,
  addNewEmployeeCreator,
  updateNewEmployeeSalaryCreator
} from '../../data/personal-reducer'
import PersonalForm from './PersonalForm'
import { connect } from 'react-redux'

let mapStateToProps = (state) => ({})

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
