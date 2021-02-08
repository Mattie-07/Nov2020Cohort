import React from 'react'

const Contacts = (props) => {
    return (
        <>
             FirstName: {props.firstName}<br/>
             LastName: {props.lastName} <br/>
             email: {props.email} <br/>
             ph: {props.ph} <br/>
            </>
    )
}

export default Contacts
