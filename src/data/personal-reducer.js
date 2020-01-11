import waiter from '../img/waiter.jpg'

const ADD_NEW_EMPLOYEE = "ADD_NEW_EMPLOYEE"
const UPDATE_NEW_EMPLOYEE_NAME = "UPDATE_NEW_EMPLOYEE_NAME"
const UPDATE_NEW_EMPLOYEE_SALARY = "UPDATE_NEW_EMPLOYEE_SALARY"

const personalReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_EMPLOYEE:
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
      return state
    case UPDATE_NEW_EMPLOYEE_NAME:
      state.newEmployeeName = action.fullName
      return state
    case UPDATE_NEW_EMPLOYEE_SALARY:
      state.newEmployeeSalary = action.salary
      return state
    default:
      return state
  }
}

export const addNewEmployeeCreator = () => ({
  type: ADD_NEW_EMPLOYEE
})
export const updateNewEmployeeNameCreator = (name) => ({
  type: UPDATE_NEW_EMPLOYEE_NAME,
  fullName: name
})
export const updateNewEmployeeSalaryCreator = (salary) => ({
  type: UPDATE_NEW_EMPLOYEE_SALARY,
  salary: salary
})

export default personalReducer