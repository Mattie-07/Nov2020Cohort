import React, { Component } from 'react'
import AddComponent from './AddProduct'
import DeleteProduct from './DeleteProduct'
import {connect}from 'react-redux'

class Cart extends Component {
    //we are going to make sure we can display all of the items in the cart
    //In order for us to get the items from the globl state we are going to need Redux because by itself this component doesn't have access to the global component
    render() {
        return (
        <>
            <h1>Shopping Cart</h1>

            <div className='row'>
                <div className="col-6 offset-3">
            
            Total Cost: ${this.props.totalCost}
            <br/>   
            <ul>
                {this.props.products.map(p =>{
                    return  <li key={p.id}>
                        {p.productName} ${p.price}</li>
                    
                })}
            </ul>
            </div>
        </div> 
        </>
        )
    }
}

const mapStateToProps= (state) => {

    //returning an object to our state
    return{
        totalCost: state.totalCost,
        products: state.cart
    }

}

export default connect(mapStateToProps, null)(Cart)
