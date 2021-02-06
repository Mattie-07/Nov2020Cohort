import React, { Component } from 'react'

    const Contacts = (props) =>{
        return (
        <>
            <h1>{props.firstName} <br />
                {props.phoneNumber}<br/>
                {props.emailAddy} <br/>
                {props.phone} <br/>
            
            </h1>
            {/* FirstName: {props.firstName}<br/>
            LastName:{props.lastName}<br/> */}
        </>
        )
    }
    

export default Contacts
