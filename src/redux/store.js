import waiter from '../img/waiter.jpg'
import brauni from '../img/brauni.jpg'
import red_bar from '../img/red_bar.png'
import menuReducer from './menu-reducer'
import personalReducer from './personal-reducer'

let store = {
  _state: {
    menuPage: {
      categories: [
        { id: 1, name: 'Десерты' },
        { id: 2, name: 'Салаты' },
        { id: 3, name: 'Супы' },
        { id: 4, name: 'Холодные закуски' },
        { id: 5, name: 'Другие' },
      ],
      newCategoryTitle: "Category Title",
      products: [
        { id: 1, title: 'Product 1', img: brauni },
        { id: 2, title: 'Product 2', img: red_bar },
      ]
    },
    personalPage: {
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
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  _callSubscriber() { },
  dispatch(action) {
    this._state.menuPage = menuReducer(this._state.menuPage, action)
    this._state.personalPage = personalReducer(this._state.personalPage, action)
    this._callSubscriber(this._state)
  }
}

export default store