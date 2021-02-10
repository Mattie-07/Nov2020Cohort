import React,{useState, useEffect} from 'react'

const useCounter = (initialState) =>{
  const [count, setCount] = useState(initialState)
  
  const increment = () =>{
    setCount(count + 1)
  }
  return [count, increment]

}


//component
const App = () => {

  const [counter, increment] = useCounter(5, 4);
  return <button onClick={increment}>{counter}</button> 
}

// useEffect(() =>{
//   window.localStorage.setItem('count', count);
//   console.log('count has been updated')
// },[count])

//   return (
//     <div style={{textAlign: 'center', paddingTop:'200px'}}>
//     {/* <button onClick={() => setCount(count +1)}>{count}</button> */}
//     <button onClick ={increment}>{count}</button>
//     </div>
//   )


export default App;
