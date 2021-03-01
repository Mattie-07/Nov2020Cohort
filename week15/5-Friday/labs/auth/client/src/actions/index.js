
import actionTypes from './actionTypes';
import axios from 'axios'


export const signUp = (formData) => {
    console.log(formData)
        //will take the username and password
        //will call our server api ( the database)
        //wait for an authenticated token
        //call reducer to store token 
        //formData => {email, password}
        return async dispatch =>{
            try{
                let response = await axios.post('http://localhost:3001/signup', formData)
                console.log(response.data.token)
                //dispatch action to recuder
                dispatch({type:"AUH_USER", data:response.data.token})
                localStorage.setItem('token', response.data.token);
            }
        
            catch(e){
                console.log('error')
                console.log(e)
            }
            
        }
}
//like logging into application
//the user doesnt have a token
export const signin = (formData) => {

    return async dispatch =>{

        try{
            let response = await axios.post('http://localhost:3001/signup', formData);
            dispatch ({type: "AUTH_USER", data:response.data.token})
            console.log('signin', response.data.token)
            localStorage.setItem('token', response.data.token);
        }
        catch(error){
            console.log(error) 
        }
    }

}

//logout
export const signout = () => {

    localStorage.removeItem('token');
    return{
        type:"AUTH_USER",
        data:""
    }
}
