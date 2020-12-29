import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {HomePage, UsersPage, TestPage} from '../pages'

import {WithApiService} from '../hoc';

import './app.css';

const App = ({apiService}) => {
    // console.log(apiService.getUsers());
    return (
        <Switch>
            <Route path="/"
                   component={HomePage}
                   exact/>
            <Route path="/users"
                   component={UsersPage}
                   exact/>
            <Route path="/test"
                   component={TestPage}
                   exact/>
        </Switch>
    );

};

export default WithApiService()(App);