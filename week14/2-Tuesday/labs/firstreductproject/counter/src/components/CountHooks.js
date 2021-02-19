import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import increaseAction from '../actions/increaseAction'
import decreaseAction from '../actions/decreaseAction'

const CountHooks = (props) => {

    const dispatch = useDispatch();
    const count = useSelector(state => state.count) // named after the state that we want to see


    return (
        <>
        <h1>Count Hooks</h1>
        <h2>{count}</h2>

        <button onClick={()=>dispatch(increaseAction())}>Increase</button>
        <button onClick={()=>dispatch(decreaseAction())}>Decrease</button>

        </>
    )
}

export default CountHooks
