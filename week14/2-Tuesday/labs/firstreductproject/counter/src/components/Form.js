import React from 'react'
import {connect} from 'react-redux'
import {addPerson, removePerson} from '../actions/addPerson';
import {useDispatch, useSelector} from 'react-redux';



const Forms = () => {
    //create a reducer and action
    // add another case onto the reducer

    const dispatch = useDispatch();
    const person = useSelector(state => state.count) // named after the state that we want to see


    return (
        <>
        <form onSubmit>
            First Name: <input type="text"/> <br/>
            Last Name: <input type="text"/> <br/>

            <button type="submit">Submit </button>
        </form>
        </>
    )
}

export default Forms
