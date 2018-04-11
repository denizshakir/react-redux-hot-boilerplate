import React from 'react'
import { Route, IndexRoute, Router } from 'react-router'
import Layout from './containers/Layout';
import Home from './containers/Home';
import Test from './containers/Test';

const Routes = (
    <Router>
        <Route name="app" path="/app" component={Layout}>
            <IndexRoute component={Home} />
            <Route path="test" component={Test} />
        </Route>
    </Router>
);

export default Routes;