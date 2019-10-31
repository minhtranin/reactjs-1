import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { createStore } from 'redux';
import {Provider} from 'react-redux';
let initstate = {
    type :'one ',
    status:'true'
  } 
  const reducer = (state = initstate,action)=>{
    if(state.type === 'one'){
        return state.type === 'two';
    }
  
    return state;
  }
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App testpro='Minhpro prop'>kakak i am child</App></Provider>, document.getElementById('root'));


serviceWorker.unregister();
