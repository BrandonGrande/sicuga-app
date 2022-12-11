import React from 'react';
import {
    Route,
    Redirect
  } from 'react-router-dom';
  
export const PrivateRoute = ({
    isAuthenticated,
    path,
    component:Component
}) => {
    return (        
        <Route
            exact path={path} 
            component={(props) =>{
                return(isAuthenticated) ? <Component  {...props}/>
                : <Redirect to="/auth/login"/>
            }}
        />
    )
}
