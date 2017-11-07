import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const div = document.getElementById('root');

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), div);
registerServiceWorker();
