import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/Root';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const div = document.getElementById('root');

const initial = [
];

function range (state = initial, action) {
    return [
        ...state,
        action.payload,
    ];
}

const store = createStore(range);

ReactDOM.render((
    <Provider store={store}>
        <Root/>
    </Provider>
), div);
registerServiceWorker();
