
import './App.css';
import {useState} from 'react'
import Second from './Second'
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const lifeIsGood = true;
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
  <>

      <h1>
        Counter: Local State
      </h1>
      <p>count</p>
      <button onClick={()=>console.log("")} > Increment </button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}> Decrement </button>
      <button onClick={()=>dispatch({type:"ADD_USER"})}> Add Matthew </button>

</>
  );
}

export default App;
