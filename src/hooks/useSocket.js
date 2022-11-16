import { useCallback, useState } from 'react';
import io from 'socket.io-client';


export const useSocket = ( serverPath ) => {
    
    const [socket,setSocket]=useState(null);

    const conectarSocket = useCallback(()=>{
        
        const token = localStorage.getItem('token');
        const socketTemp=io.connect( serverPath, 
            {
            transports: ['websocket'],
            autoConnect:true,
            forceNew:true,
            query:{
                'x-token':token
            }
        });;
    
        setSocket(socketTemp);

    },[serverPath]);
   
    const desconectarSocket = useCallback(()=>{
        socket?.disconnect();
    },[socket]);


    return {
        socket,
        conectarSocket,
        desconectarSocket
    }
}