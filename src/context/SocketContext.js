import React,{useEffect,useContext} from 'react';
import {createContext} from 'react';
import {useSocket} from '../hooks/useSocket';
import {AuthContext} from '../auth/AuthContext';
export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const {socket, conectarSocket,desconectarSocket} = useSocket('http://localhost:8080');
    const {auth} = useContext(AuthContext);

    useEffect(() => {
        if(auth.logged){
            conectarSocket();
        }
    }, [auth,conectarSocket]);


    useEffect(() => {
        if(!auth.logged){
            desconectarSocket();
        }
      
    }, [auth,desconectarSocket]);

    return (
        <SocketContext.Provider value={{ socket }}>
            { children }
        </SocketContext.Provider>
    )
}