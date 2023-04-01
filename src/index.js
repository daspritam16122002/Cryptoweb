import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App'
import store from './app/store';
import 'antd/dist/reset.css';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,document.getElementById('root')
);

//since the app is under provider it mean every single component inside app will have access to the store