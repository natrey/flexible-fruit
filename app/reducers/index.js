import { combineReducers } from 'redux';
import fruitWeightReducer from './fruitWeightReducer';
import waterPercentageReducer from './waterPercentageReducer';

const allReducers = {
    fruitWeight: fruitWeightReducer,
    waterPercentage: waterPercentageReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;