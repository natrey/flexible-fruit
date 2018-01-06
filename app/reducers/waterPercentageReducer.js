
import  { UPDATE_WATER_PERCENTAGE }  from '../actions/fruitWeightActions';

const initialState = {    
    waterPercentage: 99        
}

export default function(state=initialState, action) {
    switch (action.type) {
        case UPDATE_WATER_PERCENTAGE: {
            return {
                ...state,
                waterPercentage: action.waterPercentage
            }
        }
        default:
            return state;
    }

}

