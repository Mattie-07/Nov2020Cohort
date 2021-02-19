import React from 'react'
import {Link} from 'react-router-dom'

const BaseLayout = (props) => {
    return (
        <>

        <Link to="/"> Home </Link>
        <Link to="/count"> View Count </Link>:;
        <Link to="/count_hooks"> Count Hooks </Link>
        <Link to="/count_view_hooks"> View Count Hooks </Link>
        <Link to="/Forms"> Forms </Link>
        <br/>
        <br/>
        {props.children}
        
        </>
    )
}

export default BaseLayout
