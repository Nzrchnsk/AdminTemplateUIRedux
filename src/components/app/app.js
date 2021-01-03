import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import {HomePage, UsersPage, TestPage} from '../pages'

import {withApiService} from '../hoc';

import './app.css';
import Navbar from "../navbar/navbar";

const App = ({apiService}) => {
    // console.log(apiService.getUsers());
    return (
        <div>
            <Navbar/>
            <Switch>
                <main role='main' className='container'>
                    <Route path="/"
                           component={HomePage}
                           exact/>
                    <Route path="/users"
                           component={UsersPage}
                           exact/>
                    <Route path="/test"
                           component={TestPage}
                           exact/>
                </main>
            </Switch>

        </div>
    );

};

export default withApiService()(App);