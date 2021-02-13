import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainTheme from './components/layout/MainTheme'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import ContactList from './components/ContactList/ContactList'

const noMatch = () =><div>Error Page</div>

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainTheme>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/addContact' component={ContactList}/>
          <Route component={noMatch}/>
        </Switch>
      </MainTheme>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

