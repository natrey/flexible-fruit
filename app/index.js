import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js';
import { Provider } from 'react-redux';


// main app
import App from './Containers/App';



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

