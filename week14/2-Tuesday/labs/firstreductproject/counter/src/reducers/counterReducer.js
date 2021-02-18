let initalState = {
    count:0
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
            default:
                return state;
        }
}


export default counterReducer;