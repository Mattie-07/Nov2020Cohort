import React from 'react';
import {useState, useEffect} from 'react';


function App2 () {
    const [article, setArticle] = useState([])
    const [topic, setTopic] = useState("health")
    useEffect(() => {
        const fetchData = async ()=>{
            let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=f11810e069c8494e8039180140b7cada`;
            const response = await fetch(url);
            const data = await response.json();
            setArticle(data.articles)
        }
            fetchData();
            console.log("testInside Use effect - 2")
    },[topic])

        let articleBeingMapped = (element) =>{
            let articleList = article.map((theArticle, index) =>{
                return  <div>
                        <p>
                            {theArticle.description}
                        </p>
                        </div>
            })
            return articleList
        }
    return (
            <div className="container">
            <h1>The news Articles you would like to see</h1>
            <button onClick={() => setTopic("sports")}>Sports</button>
            <button onClick={() => setTopic("technology")}>Technology</button>
            <button onClick={() => setTopic("business")}>businesss</button>
            {articleBeingMapped()}


            </div>

    );
}

export default App2
