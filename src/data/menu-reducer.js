const ADD_CATEGORY_ITEM = "ADD_CATEGORY_ITEM"
const UPDATE_NEW_CATEGORY_TITLE = "UPDATE_NEW_CATEGORY_TITLE"
const GET_PRODUCTS = "GET_PRODUCTS"

let initialState = {
  categories: [
    { id: 1, name: 'Десерты' },
    { id: 2, name: 'Салаты' },
    { id: 3, name: 'Супы' },
    { id: 4, name: 'Холодные закуски' },
    { id: 5, name: 'Другие' },
  ],
  newCategoryTitle: "Item Title",
  products: []
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY_ITEM: {
      return {
        ...state,
        categories: [...state.categories, { id: 6, name: state.newCategoryTitle }],
        newCategoryTitle: ''
      }
    }
    case UPDATE_NEW_CATEGORY_TITLE: {
      return {
        ...state,
        newCategoryTitle: action.newTitle
      }
    }
    case GET_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.products]
      }
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
export const getProductsAC = (products) => ({
  type: GET_PRODUCTS,
  products: products
})

export default menuReducer