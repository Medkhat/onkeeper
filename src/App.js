import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Orders from './components/orders/Orders';
import { Route } from 'react-router-dom';
import PersonalContainer from './components/personal/PersonalContainer';

function App(props) {
  return (
    <div className="App">
      <Header />
      <div className="app_wrapper">
        <Route exact path='/' render={() => <Menu />} />
        <Route path='/orders' render={() => <Orders />} />
        <Route path='/personal' render={() => <PersonalContainer />} />
      </div>
    </div>
  );
}

export default App;
