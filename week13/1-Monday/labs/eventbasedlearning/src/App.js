import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super();
    this.state ={
      count:7
    }
    }
    addCount = (event) => {
      //re-render
      this.setState({
        count: this.state.count + 1
      })
  }
    decreaseCount = (event) => {
      //re-render
      this.setState({
        count: this.state.count - 1
      })
  }

  render() {
    //in a class based component, you would have to use this.props
    // for the same above you would have to use this.state
    return (
      <>
        <button onClick={this.addCount}> +</button>
        <p>{this.state.count}</p>
        <button onClick={this.decreaseCount}> -</button>
      </>
    )
  }
}

export default App
