import React, { Component } from 'react'

class News extends Component {
    constructor(){
        // console.log('constructor')
        super();
        this.state ={   
            articles: [],
            searchResults: "",
            articleList: []
        }
    }
    filterUserInput = (element) =>{
        this.setState({articleList:articleList},()=>{
            console.log(this.state.articleList)
        })
    }
    filterArticleList = (element) =>{
        let filteredList =  this.state.articles.filter(articleObj =>{
            return articleObj.title.toLowerCase().includes(this.state.searchResults.toLowerCase());
        })
        let articleList = filteredList.map((article, index) => {
            return <li key ={index}>
            <h4>{article.title}</h4>
            <img src={article.urlToImage} alt =""/>
            <p>{article.description}</p>
                </li>
        })
        return articleList
    }
    componentDidMount = async() =>{
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd"
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            articles: data.articles
        }, () =>{
                    console.log(this.state.articles);
                })
            }
    handleInput = (event) =>{
        let filteredList = filterUserInput(event.targe.value);
        this.setState({
            searchResults: event.target.value,
            articles: filteredList
})
    }
    render() {
        const {articles, searchResults} = this.state;

        return (
        <>
        <h1> News Articles</h1>
        <input type="text" value={searchResults} onChange={this.handleInput}/>

        {articleList}
        </>
        )
    }
    }

export default News
