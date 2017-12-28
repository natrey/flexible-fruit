import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js';
import { Provider } from 'react-redux';

import { updateFruitWeight, updateWaterPercentage }  from './actions/fruitWeightActions';


// main app
import App from './Containers/App';

console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(updateFruitWeight(6));
store.dispatch(updateWaterPercentage(110));

unsubscribe();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

