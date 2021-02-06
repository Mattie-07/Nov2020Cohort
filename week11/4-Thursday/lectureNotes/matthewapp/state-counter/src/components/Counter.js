import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
    }
    render(){
        return(
            <div>
                <button onClick={this._decrementCounter}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this._incrementCounter}>+</button>
            </div>
        );
    }
}

_incrementCounter = () =>{
    //call this.setState() to increment this.state.count
    this.setState({
        count: this.state.count + 1 // telling React to update the count of the object by one. 
    }, () => {
        console.log("Finished updating the count");
    })
}

_decrementCounter = () => {
    //calls this.setState() to decrement this.state.count
    this.setState({
        count: this.state.count - 1 // telling React to decrement the count of the object by one.
    })
}, () =>{
    console.log("Finished updating the count");
}

export default Counter;