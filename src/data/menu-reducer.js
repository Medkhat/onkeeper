const ADD_CATEGORY_ITEM = "ADD_CATEGORY_ITEM"
const UPDATE_NEW_CATEGORY_TITLE = "UPDATE_NEW_CATEGORY_TITLE"

const menuReducer = (state, action) => {

  if (action.type === ADD_CATEGORY_ITEM) {

    let newItem = {
      id: 6,
      name: state.newCategoryTitle
    }
    state.categories.push(newItem)
    state.newCategoryTitle = ''

  } else if (action.type === UPDATE_NEW_CATEGORY_TITLE) {

    state.newCategoryTitle = action.newTitle

  }

  return state
}

export default menuReducer