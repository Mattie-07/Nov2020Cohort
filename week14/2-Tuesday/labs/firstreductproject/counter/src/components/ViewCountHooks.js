import React from 'react'
import {useSelector} from 'react-redux'

const ViewCountHooks = (props) => {
    const count = useSelector(state => state.count)
    return (
        <>
        <h1> View Count Hooks</h1>
        <h2>{count}</h2>

        </>
    )
}

export default ViewCountHooks
