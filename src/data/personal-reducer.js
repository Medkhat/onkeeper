import waiter from '../img/waiter.jpg'

const ADD_NEW_EMPLOYEE = "ADD_NEW_EMPLOYEE"
const UPDATE_NEW_EMPLOYEE_NAME = "UPDATE_NEW_EMPLOYEE_NAME"
const UPDATE_NEW_EMPLOYEE_SALARY = "UPDATE_NEW_EMPLOYEE_SALARY"

const personalReducer = (state, action) => {

  if (action.type === ADD_NEW_EMPLOYEE) {

    let newEmployee = {
      id: 6,
      fullName: state.newEmployeeName,
      salary: state.newEmployeeSalary,
      working_days: ['Вт', 'Чт', 'Сб'],
      img: waiter
    }
    state.personal.push(newEmployee)
    state.newEmployeeName = ''
    state.newEmployeeSalary = ''

  } else if (action.type === UPDATE_NEW_EMPLOYEE_NAME) {

    state.newEmployeeName = action.fullName

  } else if (action.type === UPDATE_NEW_EMPLOYEE_SALARY) {

    state.newEmployeeSalary = action.salary

  }

  return state
}

export default personalReducer