import React, {useState, useEffect} from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  const handleChange = () =>{
    setCount(count + 1);
  }

  useEffect(() =>{
      
  })

  return (
    <div style={{textAlign:'center', paddingTop:'200px'}}>
      <button onClick={handleChange}>{count}</button>
      {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
    </div>
  );
}

export default App;
