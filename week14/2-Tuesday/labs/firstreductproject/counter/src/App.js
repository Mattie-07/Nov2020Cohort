import React, { Component } from 'react'
import {connect} from 'react-redux'

class App extends Component {
  constructor(){
    super()
    this.state = {
      count:0,
      title:"Counter Reducer"
    }
  }

  // handleIncrease = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  // handleDecrease = () => {
  //   this.setState({
  //     count: this.state.count - 1
  //   })
  // }
  

  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <h1>{this.state.count}</h1>

        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.handleDecrease}>Decrease</button>
      </>
    )
  }
}

export default App
