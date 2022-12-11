import React,{useContext,useEffect} from 'react';
import { MainUser } from '../pages/MainUser';
import {AuthRouter} from './AuthRouter';
import {PublicRoute} from './PublicRoute';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import {PrivateRoute} from './PrivateRoute';
import { QuestionForm } from '../components/RegisterTask/QuestionForm';

export const AppRouter = () => {

    const {auth,verificaToken}= useContext(AuthContext)
 
    useEffect(() => {
        verificaToken();        
    }, [verificaToken])


    return (
        auth.checking 
        ?
        <div></div>
        :
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={auth.logged} path="/auth" component={AuthRouter}/>             
                    <PrivateRoute isAuthenticated={auth.logged} exact path="/"component={MainUser}/>
                    <PrivateRoute isAuthenticated={auth.logged} exact path="/questionForm/:idQuest"component={QuestionForm}/>
                    <Redirect to="/"/>     
                </Switch>
            </div>
        </Router>

    )
}
