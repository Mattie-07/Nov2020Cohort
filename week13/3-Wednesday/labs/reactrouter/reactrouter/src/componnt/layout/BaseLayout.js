import React from 'react'
import Header from  './Headerf'
import footer from' ./Footer'
const BaseLayout = (props) => {
    return (
        <>

        <Header/>
        Here is some reader
        {props.children}

        Footer is here.
        <br/>
        <Footer/>
        </>
    )
}

export default BaseLayout
