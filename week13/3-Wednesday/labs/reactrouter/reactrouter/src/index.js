import React from "react";
import ReactDOM from "react-dom";
// import sample1 from './'
// import sample2 from 
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import App from "./App";
const App2 = () => <h1>Home Page</h1>
const About = () => <h1>About us</h1>
const ContactUs = () => <h1>Contact Us</h1>
const Blog = () => <h1>Our Blog</h1>
const Comment = () => <h1>Comments</h1>


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App2} />
        <Route path="/about" component={About} />
        <Route path="/contactUs" component={ContactUs} />
        <Redirect from ='blog' to='/'/>
        <Route path="/blog" component={Blog} />
        <Route path="/comment" component={Comment} />
        <Route path="/sample1" component={Sample1} />
        <Route path="/sample2" component={Sample2} />
        <Route path="/sample2:/id" component={Sampl2} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);