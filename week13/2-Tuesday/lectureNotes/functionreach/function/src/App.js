import {useState, useEffect} from "react";

function App() {
    const [count, setCount] = useState("");
    const [articles, setArticles] = useState([]);
    // const [userName, setUserName] = UseState(0)

    useEffect(() =>{
      const fetchDataAndSetArticles = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd`;

        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles)
      }
      fetchDataAndSetArticles();
      console.log("useEffect has fired")
    },[count])
    // useEffect(() => {})
    // useEffect(() => {},[])
    // useEffect(() => {},[stateVariableToTrack])
    return(
      <div className ="App">
      <h1> Hello World!</h1>
      <h3>This is acount {count}</h3>
      <button onClick={()=> setCount(count +1)}>Increment</button>
      <button onClick={()=> setCount(count -1)}>Decrement </button>
      </div>
  );
}

export default App;
