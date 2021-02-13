import React, {useState} from 'react'

const ContactList = () => {

    const [contacts, setContacts] = useState([])

    const handleAddContact = (newContact) =>{
        setContacts([newContact, ...contacts]);
    }

    
    return <>
        
        </>
    
    }

export default ContactList
