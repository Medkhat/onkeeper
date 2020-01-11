import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Personal from './components/personal/Personal';
import Orders from './components/orders/Orders';
import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <Header />
      <div className="app_wrapper">
        <Route
          exact
          path='/'
          render={() => {
            return (
              <Menu
                categories={props.state.menuReducer.categories}
                products={props.state.menuReducer.products}
                newCategoryTitle={props.state.menuReducer.newCategoryTitle}
                dispatch={props.dispatch}
              />
            )
          }}
        />
        <Route path='/orders' render={() => <Orders />} />
        <Route
          path='/personal'
          render={() => {
            return (
              <Personal personal={props.state.personalReducer.personal} dispatch={props.dispatch} />
            )
          }}
        />
      </div>
    </div>
  );
}

export default App;
