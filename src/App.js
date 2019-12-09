import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Personal from './components/personal/Personal';
import Orders from './components/orders/Orders';
import {Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app_wrapper">
          <Route path='/menu' component={Menu}/>
          <Route path='/personal' component={Personal}/>
          <Route path='/order' component={Orders}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
