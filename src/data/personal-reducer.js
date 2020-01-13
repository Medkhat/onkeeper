import waiter from '../img/waiter.jpg'

const ADD_NEW_EMPLOYEE = "ADD_NEW_EMPLOYEE"
const UPDATE_NEW_EMPLOYEE_NAME = "UPDATE_NEW_EMPLOYEE_NAME"
const UPDATE_NEW_EMPLOYEE_SALARY = "UPDATE_NEW_EMPLOYEE_SALARY"
const UPDATE_NEW_EMPLOYEE_LOGIN = "UPDATE_NEW_EMPLOYEE_LOGIN"
const UPDATE_NEW_EMPLOYEE_PASSWORD = "UPDATE_NEW_EMPLOYEE_PASSWORD"
const UPDATE_NEW_EMPLOYEE_PHONE = "UPDATE_NEW_EMPLOYEE_PHONE"
const UPDATE_NEW_EMPLOYEE_EMAIL = "UPDATE_NEW_EMPLOYEE_EMAIL"
const UPDATE_NEW_EMPLOYEE_EMPLOYMENT_DATE = "UPDATE_NEW_EMPLOYEE_EMPLOYMENT_DATE"
const GET_EMPLOYEE_DATA = "GET_EMPLOYEE_DATA"
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
  newEmployeeLogin: "",
  newEmployeePassword: "",
  newEmployeePhone: "",
  newEmployeeEmail: "",
  newEmployeeEmploymentDate: "",
  newEmployeeSalary: ""
}

const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_EMPLOYEE:
      let newEmployee = {
        id: 6,
        img: waiter,
        fullName: state.newEmployeeName,
        login: state.newEmployeeLogin,
        password: state.newEmployeePassword,
        phoneNumber: state.newEmployeePhone,
        email: state.newEmployeeEmail,
        employmentDate: state.newEmployeeEmploymentDate,
        salary: state.newEmployeeSalary,
        working_days: ['Вт', 'Чт', 'Сб'],
        position: "waiter",
        salaryType: "monthly"
      }
      return {
        ...state,
        personal: [...state.personal, newEmployee],
        newEmployeeName: "",
        newEmployeeLogin: "",
        newEmployeePassword: "",
        newEmployeePhone: "",
        newEmployeeEmail: "",
        newEmployeeEmploymentDate: "",
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
    case UPDATE_NEW_EMPLOYEE_LOGIN:
      return {
        ...state,
        newEmployeeLogin: action.objKey
      }
    case UPDATE_NEW_EMPLOYEE_PASSWORD:
      return {
        ...state,
        newEmployeePassword: action.objKey
      }
    case UPDATE_NEW_EMPLOYEE_PHONE:
      return {
        ...state,
        newEmployeePhone: action.objKey
      }
    case UPDATE_NEW_EMPLOYEE_EMAIL:
      return {
        ...state,
        newEmployeeEmail: action.objKey
      }
    case UPDATE_NEW_EMPLOYEE_EMPLOYMENT_DATE:
      return {
        ...state,
        newEmployeeEmploymentDate: action.objKey
      }
    case GET_EMPLOYEE_DATA:
      return {
        ...state,
        personal: state.personal.map(item => {
          if (item.id === action.userId) {
            return {
              ...item
            }
          }
          return item
        })
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
export const getEmployeeDataAC = (userId) => ({
  type: GET_EMPLOYEE_DATA,
  id: userId
})


export default personalReducer