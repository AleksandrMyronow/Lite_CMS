import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/Root';

const div = document.getElementById('root');

ReactDOM.render((
    <Root/>
), div);
registerServiceWorker();
