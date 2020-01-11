const ADD_CATEGORY_ITEM = "ADD_CATEGORY_ITEM"
const UPDATE_NEW_CATEGORY_TITLE = "UPDATE_NEW_CATEGORY_TITLE"

const menuReducer = (state, action) => {
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