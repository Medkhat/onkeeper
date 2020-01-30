const ADD_CATEGORY_ITEM = "ADD_CATEGORY_ITEM"
const UPDATE_NEW_CATEGORY_TITLE = "UPDATE_NEW_CATEGORY_TITLE"
const GET_PRODUCTS = "GET_PRODUCTS"
const GET_CATEGORY = "GET_CATEGORY"
const GET_CERTAIN_CATEGORY = "GET_CERTAIN_CATEGORY"
const TOGGLE_LOADER = "TOGGLE_LOADER"

let initialState = {
  categories: [],
  newCategoryTitle: "",
  products: [],
  currentCategory: 1,
  isFetching: false
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
        products: action.products
      }
    case GET_CATEGORY:
      return {
        ...state,
        categories: action.categories
      }
    case GET_CERTAIN_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      }
    case TOGGLE_LOADER:
      return {
        ...state,
        isFetching: action.isFetching
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
export const getCategoryAC = (categories) => ({
  type: GET_CATEGORY,
  categories: categories
})
export const getCertainCategoryAC = (currentCategory) => ({
  type: GET_CERTAIN_CATEGORY,
  currentCategory: currentCategory
})
export const toggleLoaderAC = (isFetching) => ({
  type: TOGGLE_LOADER,
  isFetching
})

export default menuReducer