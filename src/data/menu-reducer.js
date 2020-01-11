import brauni from '../img/brauni.jpg'
import red_bar from '../img/red_bar.png'

const ADD_CATEGORY_ITEM = "ADD_CATEGORY_ITEM"
const UPDATE_NEW_CATEGORY_TITLE = "UPDATE_NEW_CATEGORY_TITLE"

let initialState = {
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
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY_ITEM:
      let newItem = {
        id: 6,
        name: state.newCategoryTitle
      }
      state.categories.push(newItem)
      state.newCategoryTitle = ''
      return state
    case UPDATE_NEW_CATEGORY_TITLE:
      state.newCategoryTitle = action.newTitle
      return state
    default:
      return state
  }
}

export const addCatItemActionCreator = () => ({
  type: ADD_CATEGORY_ITEM
})
export const updateNewCategoryTiteActionCreator = (title) => ({
  type: UPDATE_NEW_CATEGORY_TITLE,
  newTitle: title
})

export default menuReducer