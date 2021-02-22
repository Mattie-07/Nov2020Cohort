import React, {useState} from 'react'
import {addPerson, removePerson} from '../actions/addPerson';
import {useDispatch, useSelector} from 'react-redux';



const Forms = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const persons = useSelector(state => state.person) // an array of objects.
    const dispatch = useDispatch(); // access to dispatch an action creator.  // in other words, we would be able to impement that method



    console.log(firstName, lastName)

    const handleOnSubmit = (e) => {
        e.preventDefault();

        dispatch(addPerson({
            firstName: firstName,
            lastName: lastName
        }))

    }
    //below the form tag we are displaying everything now that all the code has been finished.

    return  <>
        <form onSubmit ={handleOnSubmit}>
            First Name: <input value={firstName} onChange={(e)=> setFirstName(e.target.value)} type="text"/> <br/>
            Last Name: <input value={lastName} onChange={(e)=> setLastName(e.target.value)} type="text"/> <br/>

            <button type="submit">Submit </button>
        </form>
        
        <ul>
        {persons.map(person => {
        return <li key={person.firstName}>{person.firstName} {person.lastName} <button onClick={()=>dispatch(removePerson(person.firstName))}>X</button></li>

        })}
    </ul>



        </>
    
}

export default Forms
