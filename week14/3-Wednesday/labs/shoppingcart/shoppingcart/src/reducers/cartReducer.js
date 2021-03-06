import {v1 as uuidv1} from 'uuid'

const initialState = {
    totalCost: 0,
    cart:[
        {
        id: uuidv1(),
        productName:"Apples",
        price: 2
    }
]
}



const cartReducer = (state = initialState, action) => {

        switch(action.type)
        {
            case 'ADD_PRODUCT':
            return{
                ...state,

                cart: [...state.cart, action.data]

            }
            case 'DELETE_PRODUCT':
                let filteredCart = state.cart.filter(p =>{
                    return p.id != action.data.id 
                })

                return{
                ...state,
                totalCost: state.totalCost - parseFloat(action.data.price),
                cart: filteredCart
                }
            default:
                return state;
        }

}

export default cartReducer;
