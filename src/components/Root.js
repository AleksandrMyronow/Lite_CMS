import React from 'react';
import browserHistory from 'react-router/lib/browserHistory';
import { Router, Route, IndexRoute } from 'react-router'
// import routes from '../routes';
import DummyTable from './dummyTable';
import DummyChart from './dummyChart';
import DummyList from './dummyList';
import App from './App';

const Root = () =>
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={DummyTable} />
            <Route path='dummyTable' component={DummyTable} />
            <Route path='dummyChart' component={DummyChart} />
            <Route path='dummyList' component={DummyList} />
        </Route>
    </Router>;


    // <Router history={browserHistory} routes={routes} />;
    // Sorry, but i can not understand
    // why we need generate tabs in routes, if we always should make actions to it ;)
    // Perhaps, I am do not understand what do you want well)

export default Root;
