import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cart from './components/Cart'
import Product from './components/Product'
import BaseLayout from './components/layout/BaseLayout'
import{ 
  BrowserRouter as Router, 
  Route, Switch
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducers/cartReducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ;


import 'boost'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <BaseLayout>
      <Switch>
        <Route exact path= '/' component={App}/>
        <Route path= '/cart' component={Cart}/>
        <Route path= '/product' component={Product}/>
      </Switch>
      </BaseLayout>
    </Router>
    </Provider>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
