import waiter from '../img/waiter.jpg'

const ADD_NEW_EMPLOYEE = "ADD_NEW_EMPLOYEE"
const UPDATE_NEW_EMPLOYEE_NAME = "UPDATE_NEW_EMPLOYEE_NAME"
const UPDATE_NEW_EMPLOYEE_SALARY = "UPDATE_NEW_EMPLOYEE_SALARY"

let initialState = {
  personal: [
    {
      id: 1,
      fullName: 'Отарбай Даурен',
      salary: 134000,
      working_days: ['Пн', 'Ср', 'Пт'],
      img: waiter
    },
    {
      id: 2,
      fullName: 'Әкімбек Медхат',
      salary: 135000,
      working_days: ['Вт', 'Чт', 'Сб'],
      img: waiter
    },
    {
      id: 3,
      fullName: 'Бахытов Ернияз',
      salary: 136000,
      working_days: ['Пн', 'Ср', 'Пт'],
      img: waiter
    },
    {
      id: 4,
      fullName: 'Шомат Ілияс',
      salary: 137000,
      working_days: ['Вт', 'Чт', 'Сб'],
      img: waiter
    },
    {
      id: 5,
      fullName: 'Нұрбек',
      salary: 138000,
      working_days: ['Пн', 'Ср', 'Пт'],
      img: waiter
    },
  ],
  newEmployeeName: "",
  newEmployeeSalary: 0,
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
        newEmployeeName: '',
        newEmployeeSalary: ''
      }
    case UPDATE_NEW_EMPLOYEE_NAME:
      return {
        ...state,
        newEmployeeName: action.fullName
      }
    case UPDATE_NEW_EMPLOYEE_SALARY:
      return {
        ...state,
        newEmployeeSalary: action.salary
      }
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