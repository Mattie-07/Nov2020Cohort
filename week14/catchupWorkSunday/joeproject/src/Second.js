import React from 'react'
import {useSelector, useDispatch} from 'react-redux'


function Second(props) {
    return (
        <>
        <h1>
        Counter: Second state
        </h1>
        <p></p>
        <button onClick={()=>dispatch({type:"INCREMENT"})} > Increment </button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}> Decrement </button>
        <p>{props.name}</p>
        </>
    )
}

export default Second
