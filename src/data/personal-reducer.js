import waiter from '../img/waiter.jpg'

const ADD_NEW_EMPLOYEE = "ADD_NEW_EMPLOYEE"
const UPDATE_NEW_EMPLOYEE_NAME = "UPDATE_NEW_EMPLOYEE_NAME"
const UPDATE_NEW_EMPLOYEE_SALARY = "UPDATE_NEW_EMPLOYEE_SALARY"
// const UPDATE_NEW_EMPLOYEE_POSITION = "UPDATE_NEW_EMPLOYEE_POSITION"
// const UPDATE_NEW_EMPLOYEE_SALARY_TYPE = "UPDATE_NEW_EMPLOYEE_SALARY_TYPE"

let initialState = {
  personal: [
    {
      id: 1,
      img: waiter,
      fullName: 'Адамұлы Адам',
      login: "adam01",
      password: "12345",
      phoneNumber: "+7 707 691 9131",
      email: "adam@gmail.com",
      employmentDate: "12.01.2020",
      salary: 134000,
      working_days: ['Пн', 'Ср', 'Пт'],
      position: "waiter",
      salaryType: "monthly"
    }
  ],
  newEmployeeName: "",
  newEmployeeSalary: ""
}

const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_EMPLOYEE:
      let newEmployee = {
        id: 6,
        fullName: state.newEmployeeName,
        salary: state.newEmployeeSalary,
        working_days: ['Вт', 'Чт', 'Сб'],
        img: waiter
      }
      return {
        ...state,
        personal: [...state.personal, newEmployee],
        newEmployeeName: "",
        newEmployeeSalary: ""
      }
    case UPDATE_NEW_EMPLOYEE_NAME:
      return {
        ...state,
        newEmployeeName: action.objKey
      }
    case UPDATE_NEW_EMPLOYEE_SALARY:
      return {
        ...state,
        newEmployeeSalary: action.objKey
      }
    default:
      return state
  }
}

export const addNewEmployeeAC = () => ({
  type: ADD_NEW_EMPLOYEE
})
export const universalAC = (type, objKey) => ({
  type: type,
  objKey: objKey
})


export default personalReducer