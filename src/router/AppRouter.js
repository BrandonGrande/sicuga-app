import React,{useContext,useEffect} from 'react';
import { MainUser } from '../pages/MainUser';
import { RegisterTask } from '../pages/RegisterTask';
import {AuthRouter} from './AuthRouter';
import {PublicRoute} from './PublicRoute';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import {PrivateRoute} from './PrivateRoute';

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
                    <PrivateRoute isAuthenticated={auth.logged} exact path="/registerTask"component={RegisterTask}/>
                    <Redirect to="/"/>     
                </Switch>
            </div>
        </Router>

    )
}
