import store from './data/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';

let rerenderEntiredTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </BrowserRouter>,
    document.getElementById('app')
  );
}
rerenderEntiredTree(store.getState())
store.subscribe(() => rerenderEntiredTree(store.getState()))
//serviceWorker.unregister();