import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import FirstComp from './FirstComponent';
import Parent from './ex1/Parent';

// let myArr = ["Jordan", "Micah", "Joe", "Jake"]
let parentName = "Ann"
let grandChild = 'Ash'


ReactDOM.render(
  <React.StrictMode>
    {/* <Parent firstName ={myArr[0]} /> <br/>
    <Parent firstName ={myArr[1]} /> <br/>
    <Parent firstName ={myArr[2]} /> <br/>
    <Parent firstName ={myArr[3]} /> <br/> */}
    <Parent parent = {parentName} />
  </React.StrictMode>,
  document.getElementById('root')
);

//this value would be retrieved by using prop.firstName
//parent
//Child
//GrandChild