import React from 'react';
import './app.css';
import {WithApiService} from '../hoc';

const App = ({apiService}) =>{
    console.log(apiService.getUsers());
    return <div>App</div>

};

export default WithApiService()(App);