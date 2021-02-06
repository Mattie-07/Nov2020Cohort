import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import CardList from './components/CardList'
import './assets/styles/global.css'
import Card from './components/Card'
import data from './components/cardContact';

class App2 extends Component {
    
    render() {
        let contactsArr = data.map(contact =>{
            return <Card name={contact.name} img={contact.imgURL} tel={contact.phone} email={contact.email} />
        })
        return (
        <>
            <div>

                <h1 className="heading"> My Contacts</h1>
                {contactsArr}
            </div>
            {/* <div className="bg-purple">
                Hello world!
                <div style={{style:'purple', fontSize:'40px, textAlign:center'}}></div>
            </div>
            <Container fluid>
                <Row>
                
    
                        <CardList />
            
                </Row>
            </Container> */}
        </>
        )
    }
}
// const style= {
//     purple: {
//         color: 'orange',
//         fontSize:" 40px"
//     }

// }

export default App2
