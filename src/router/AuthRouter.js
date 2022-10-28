import React from 'react';
import { Switch,Redirect,Route } from 'react-router-dom';
import {LoginPage} from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import '../css/loginRegister.css';
export const AuthRouter = () => {
    return (
        <Switch>
            <Route exact path ="/auth/login" component={LoginPage} />
            <Route exact path ="/auth/register" component={RegisterPage}/>
            <Redirect to="/auth/login"/>
        </Switch>
    )
}
