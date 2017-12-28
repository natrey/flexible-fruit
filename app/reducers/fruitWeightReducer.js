
import  { UPDATE_FRUIT_WEIGHT }  from '../actions/fruitWeightActions';

const initialState = {   
    weight: 5        
}

export default function(state=initialState, action) {
    switch (action.type) {
        case UPDATE_FRUIT_WEIGHT: {
            return {
                ...state,
                weight: state.weight === action.payload.weight ? action.payload : state.weight
            }
        }
        default:
            return state;
    }
    
}

