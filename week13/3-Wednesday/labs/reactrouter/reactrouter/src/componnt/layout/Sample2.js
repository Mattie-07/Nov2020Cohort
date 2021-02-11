import React from 'react';
import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
const Sample2 = () => {
    let history = useHistory();
    let { id } = useParams();
    const handleClick = () => {
        console.log("log for Sample2")
        history.push('/')
    }
    return (
        <>
        <h2>Sample 2</h2>
        <h3>{id} </h3>
        <button onClick={handleClick}>Click Me</button> 
        </>
    );
    }

export default Sample2
