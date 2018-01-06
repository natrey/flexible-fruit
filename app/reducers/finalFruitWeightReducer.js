
import  { UPDATE_FINAL_FRUIT_WEIGHT }  from '../actions/fruitWeightActions';

const initialState = {
    finalWeight: 10
}

export default function(state=initialState, action) {
    switch (action.type) {
        case UPDATE_FINAL_FRUIT_WEIGHT: {
            return {
                ...state,
                finalWeight: action.finalWeight
            }
        }
        default:
            return state;
    }

}

