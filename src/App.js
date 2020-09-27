import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Orders from './components/orders/Orders';
import { Route } from 'react-router-dom';
import PersonalContainer from './components/personal/PersonalContainer';
import MenuContainer from './components/menu/MenuContainer';
import Login from './components/Login/Login';

const Application = () => {
  return (
    <div className="application">
      <Header />
      <div className="app_wrapper">
        <Route path='/products' render={() => <MenuContainer />} />
        <Route path='/orders' render={() => <Orders />} />
        <Route path='/personal' render={() => <PersonalContainer />} />
      </div>
    </div>
  )
}

function App() {
  return <>
    <Route exact path='/' render={() => <Application />} />
    <Route path='/login' render={() => <Login />} />
  </>
}

export default App;
