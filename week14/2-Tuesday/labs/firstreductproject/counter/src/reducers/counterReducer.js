let initalState = {
    count:50,
    title:"Counter App" ,
    person:[]
}
const counterReducer = (state, action) => {
        if(state === undefined){
            state = initalState
        }
        switch(action.type){
            case 'INCREASE':
                return{
                    ...state,
                    count: state.count + 1,
                }
            case 'DECREASE':
                    return{
                        ...state,
                        count: state.count - 1
                    }
            case 'ADDPERSON':
                return{
                    ...state,
                    person: [...state.person, action.data]                    }
            case 'DELETEPERSON':
                return{
                    ...state,
                    person: state.person.filter
                    }
            default:
                return state;
                
        }
}


export default counterReducer;