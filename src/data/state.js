import waiter from '../img/waiter.jpg'
import brauni from '../img/brauni.jpg'
import red_bar from '../img/red_bar.png'

const ADD_CATEGORY_ITEM = "ADD_CATEGORY_ITEM"
const UPDATE_NEW_CATEGORY_TITLE = "UPDATE_NEW_CATEGORY_TITLE"
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
      ]
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
    if (action.type === ADD_CATEGORY_ITEM) {
      let newItem = {
        id: 6,
        name: this._state.menuPage.newCategoryTitle
      }
      this._state.menuPage.categories.push(newItem)
      this._state.menuPage.newCategoryTitle = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_CATEGORY_TITLE) {
      this._state.menuPage.newCategoryTitle = action.newTitle
      this._callSubscriber(this._state)
    }
  }
}

export const addCatItemActionCreator = () => ({
  type: ADD_CATEGORY_ITEM
})
export const updateNewCategoryTiteActionCreator = (title) => ({
  type: UPDATE_NEW_CATEGORY_TITLE,
  newTitle: title
})

export default store