
import  { UPDATE_FRUIT_WEIGHT }  from '../actions/fruitWeightActions';

const initialState = {   
    weight: 10        
}

export default function(state=initialState, action) {
    switch (action.type) {
        case UPDATE_FRUIT_WEIGHT: {
            return {
                ...state,
                weight: action.weight
            }
        }
        default:
            return state;
    }
    
}

