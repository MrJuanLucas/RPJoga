import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Table from './pages/Table';
import Create from './pages/Create';
import Index from './pages/Index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/home" component={Home}/>
                <Route path="/table" component={Table}/>
                <Route path="/create" component={Create}/>
                <Route path="/index" component={Index}/>
            </Switch>
        </BrowserRouter>
    );
}