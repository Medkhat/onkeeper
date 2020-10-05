import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Orders from './components/orders/Orders';
import { Redirect, Route } from 'react-router-dom';
import PersonalContainer from './components/personal/PersonalContainer';
import MenuContainer from './components/menu/MenuContainer';
import Login from './components/Login/Login';

function App() {
  return <>
    <Header />
    <div className="app_wrapper">
      <Route exact path='/' render={() => <Redirect to='/products' />} />
      <Route path='/products' render={() => <MenuContainer />} />
      <Route path='/orders' render={() => <Orders />} />
      <Route path='/personal' render={() => <PersonalContainer />} />
      <Route path='/login' render={() => <Login />} />
    </div>
  </>
}

export default App;
