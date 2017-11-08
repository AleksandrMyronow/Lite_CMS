import React from 'react';
import browserHistory from 'react-router/lib/browserHistory';
import { Router } from 'react-router'
import routes from '../routes';

const Root = () => <Router history={browserHistory} routes={routes} />;

export default Root;
