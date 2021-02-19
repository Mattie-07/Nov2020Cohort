import React, { Component } from 'react'
import {connect} from 'react-redux'
class ViewCount extends Component {
    render() {
        return (
        <>
            count holder
            <br/>
            <h1>{this.props.count}</h1>
        </>
        )
    }
}

//below is a prop that is going to be mapped to our global state
const mapStateToProps = (state) => {
    return{
        count:state.count
    }

}


export default connect(mapStateToProps, null)(ViewCount);
