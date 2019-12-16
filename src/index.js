import state, { subscribe } from './data/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { addCatItem, updateNewCategoryTitle } from './data/state';
//import * as serviceWorker from './serviceWorker';

let rerenderEntiredTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App 
        state={state} 
        addCatItem={addCatItem}
        updateNewCategoryTitle={updateNewCategoryTitle}
      />
    </BrowserRouter>, 
    document.getElementById('app')
  );
}
rerenderEntiredTree()
subscribe(rerenderEntiredTree)
//serviceWorker.unregister();