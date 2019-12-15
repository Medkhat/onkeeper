import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';

export let rerenderEntiredTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}/>
    </BrowserRouter>, 
    document.getElementById('app')
  );
}

//serviceWorker.unregister();
