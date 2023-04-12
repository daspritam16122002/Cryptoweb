import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';


import App from './App';
import 'antd/dist/reset.css';
import shop from './app/shop';
ReactDOM.render(
    <BrowserRouter>
          <Provider store={shop}>
                <App />
          </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )