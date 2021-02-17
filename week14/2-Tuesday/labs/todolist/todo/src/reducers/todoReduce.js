import {v1 as uuidv1} from 'uuid'

let initialState = {
    id:uuidv1(),
    todos:[]
}

const todoReducer = (state, action) => {
        if(state === undefined){
            state = initialState
        }
        switch(action.type){
            case 'ADD':
                return{
                    ...state, 
                    todos: [...state.todos, action.data]
                }
            default:
                return state;
        }
}


