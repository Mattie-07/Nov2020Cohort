import React from 'react'


function Second(props) {
    return (
        <>
        <h1>
        Counter: Second state
        </h1>
        <button> Increment </button>
        <button > Decrement </button>
        <p>{props.name}</p>
        </>
    )
}

export default Second
