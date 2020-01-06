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
        { id: 1, title: 'Product 1', img: 'https://www.good-menu.ru/img/postre/tort-brauni63.jpg' },
        { id: 2, title: 'Product 2', img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/02/red-velvet-cake-slice-2.jpg' },
      ]
    },
  },
  getState() {
    return this._state
  },
  _callSubscriber() { },
  addCatItem() {
    let newItem = {
      id: 6,
      name: this._state.menuPage.newCategoryTitle
    }
    this._state.menuPage.categories.push(newItem)
    this._state.menuPage.newCategoryTitle = ''
    this._callSubscriber(this._state)
  },
  updateNewCategoryTitle(newTitle) {
    this._state.menuPage.newCategoryTitle = newTitle
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  }
}

export default store