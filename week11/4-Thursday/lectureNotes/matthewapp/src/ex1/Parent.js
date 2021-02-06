import Child from './Child'
// import React from './React'

const Parent =(props) => {
    return(
        <>
            Hey from {props.firstName} 
            Hey from {props.parent} 
            <Child />
        </>
        
    )
}

export default Parent