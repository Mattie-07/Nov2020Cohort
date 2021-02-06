import React, { Component } from 'react'
import Contacts from './components/Contacts';
import data from './data/contacts'
import days from './components/days'
import dropdown from './components/DropDown'
import button from './components/Button'
class App extends Component {
  render() {

    let name = [<Contacts firstName="Veronica" lastName="Lino" phoneNum="456-4332-3455" email="v@dc.com"/>,
    <Contacts firstName="Veronica" lastName="Lino" phoneNum="456-4332-3455" email="v@dc.com"/>,
    <Contacts firstName="Veronica" lastName="Lino" phoneNum="456-4332-3455" email="v@dc.com"/>
  ]
    let contacts = [
      { firstName:"matthew",
        lastName: "roberts",
      phoneNum: "444-555-4444" ,
    email: "me@me.com"},

      { firstName:"ally" ,
        lastName: "Deeter",
      phoneNum: "777-555-4444" ,
    email: "me@Deeter.com"},
      
      { firstName:"Andrea" ,
        lastName: "Myers",
      phoneNum: "646-555-4444" ,
    email: "me@Myers.com"},
    ] 
    //[<Contact>,<Contact/>, <Contact/>]
    let contactArr = contacts.map(contactObj =>{

      return <Contacts firstName={contactObj.firstName}
      lastname={contactObj.lastName}
      phoneNum={contactObj.phone}
      email={contactObj.email} />
    })
    let allContactsArr = data.map(contactObj =>{

      return <Contacts firstName={contactObj.first_Name}
      lastname={contactObj.last_Name}
      phoneNum={contactObj.phone}
      email={contactObj.email} />
    })


    return (
      <>
      {/* <Button color="info" text="Info"/>
      <Button color="warning" text="warning"/>
      <Button color="danger" text="danger"/>
      <Button color="secondary" text="secondary"/>
      {DropDown }
      { Days } */}
      {/* <Contacts firstName={contacts[0].firstName} lastName={contacts[0].lastName} phoneNumber={contacts[0].phoneNum }email=  {contacts[0].email} />
      <Contacts firstName={contacts[1].firstName} lastName={contacts[1].lastName} phoneNumber={contacts[1].phoneNum }email=  {contacts[1].email} />
      <Contacts firstName={contacts[2].firstName} lastName={contacts[2].lastName} phoneNumber={contacts[2].phoneNum} email={contacts[2].email} /> 
       */}
        {/* First Name: Adam <br />
        Last Name: MacKinnon <br />

        First Name: Ally <br />
        Last Name: Deeter <br />

        First Name: Andrea <br />
        Last Name: Myers <br />  */}
      
      </>
    )
  }}


export default App
