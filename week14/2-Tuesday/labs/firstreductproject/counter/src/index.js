import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import ViewCount from './components/ViewCount'
import App from './App';
import reducer from './reducers/counterReducer'
import BaseLayout from './components/layout/BaseLayout'
import CountHooks from './components/CountHooks'
import ViewCountHooks from './components/ViewCountHooks'
import Form from './components/Form'


let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())// a reducer will be passed to this function

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/count' component={ViewCount}/>
          <Route path='/count_hooks' component={CountHooks}/>
          <Route path='/count_view_hooks' component={ViewCountHooks}/>
          <Route path='/form' component={Form}/>
        </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

