import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//引入生产者
import { Provider } from "react-redux";
//引入公共状态
import store from "@store";
//引入路由根组件,路由
import {HashRouter as Router,Route} from "react-router-dom";

//根路径时到App页面,并且给到生产者
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
     document.getElementById('root'));

