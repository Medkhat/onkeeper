let rerenderEntiredTree = () => {};
let state = {
  menuPage: {
    categories: [
      {id: 1, name: 'Десерты'},
      {id: 2, name: 'Салаты'},
      {id: 3, name: 'Супы'},
      {id: 4, name: 'Холодные закуски'},
      {id: 5, name: 'Другие'},
    ],
    newCategoryTitle: "Category Title",
    products: [
      {id: 1, title: 'Product 1', img: 'https://www.good-menu.ru/img/postre/tort-brauni63.jpg'},
      {id: 2, title: 'Product 2', img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/02/red-velvet-cake-slice-2.jpg'},
    ]
  },
}
export const addCatItem = () => {
  let newItem = {
    id: 6,
    name: state.menuPage.newCategoryTitle
  }
  state.menuPage.categories.push(newItem)
  state.menuPage.newCategoryTitle = ''
  rerenderEntiredTree()
}
export const updateNewCategoryTitle = (newTitle) => {
  state.menuPage.newCategoryTitle = newTitle
  rerenderEntiredTree()
}
export const subscribe = (observer) => {
  rerenderEntiredTree = observer
}
export default state