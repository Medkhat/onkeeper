import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Orders from './components/orders/Orders';
import { Route } from 'react-router-dom';
import PersonalContainer from './components/personal/PersonalContainer';
import MenuContainer from './components/menu/MenuContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_wrapper">
        <Route path='/products' render={() => <MenuContainer />} />
        <Route path='/orders' render={() => <Orders />} />
        <Route path='/personal' render={() => <PersonalContainer />} />
      </div>
    </div>
  );
}

export default App;
