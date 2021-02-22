const initalState = {
    count:0,
    name: [],
}
const rootReducer = (state = initalState, action) =>{
    switch(action.type){
        case "INCREMENT":
        return{count: state.count + 1}
        case "DECREMENT":
        return{count: state.count -1}
        case "ADD_USER":
        return{name: [...state.name, "Matthew"]}
        default :
        return state
    }
}

export default rootReducer