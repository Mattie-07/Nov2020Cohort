import React, {Component} from 'react'
import {connect} from 'react-redux'
import moduleName from 'module'



export default  (ChildComponent)=>{
    //component needs to be made
    class ComposedComponent extends Component{

componentDidUpdate

        isAuthenited = () =>{
            if(!this.isAuthenited())
        {
            if(!this.props.auth)
            this.props.history.push('/')
        }
        this.componentDidUpdate(){
            this.isAuthenited();

        }

        const mapStateToProps = (state) =>{
            return{
                auth: state.auth.authenticated
            }

        } 
        //before anything gets render we are going to check if the user is authenticatd yet.
            render(){
                return<ChildComponent />

                }
            }
        
        }
    }
