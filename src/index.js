import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//router-dom
import { BrowserRouter } from 'react-router-dom';

//redux
import {Provider} from 'react-redux';
import {store,persisitor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react'
ReactDOM.render(
  <Provider store={store} >
  
  <BrowserRouter>
  <PersistGate persistor={persisitor}>
    <App />
    </PersistGate>
  </BrowserRouter>
  
  
  </Provider>,
  document.getElementById('root')
);


