import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from '../App/App.jsx';
import DashboardPage from '../../../dashboard/components/DashboardPage/DashboardPage.jsx';

const Routes = (

    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={DashboardPage}/>
        </Route>
    </Router>

);

export default Routes;
