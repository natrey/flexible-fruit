import { combineReducers } from 'redux';
import fruitWeightReducer from './fruitWeightReducer';
import waterPercentageReducer from './waterPercentageReducer';
import finalFruitWeightReducer from "./finalFruitWeightReducer";

const allReducers = {
    fruitWeight: fruitWeightReducer,
    waterPercentage: waterPercentageReducer,
    finalFruitWeight: finalFruitWeightReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;