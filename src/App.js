import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Personal from './components/personal/Personal';
import Orders from './components/orders/Orders';
import {Route} from 'react-router-dom';

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
                categories={props.state.menuPage.categories} 
                products={props.state.menuPage.products}
                addCatItem={props.addCatItem}
              />
            )
          }}
        />
        <Route path='/order' render={() => <Orders />}/>
        <Route path='/personal' render={() => <Personal />}/>
      </div>
    </div>
  );
}

export default App;
