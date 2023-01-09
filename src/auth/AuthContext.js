import {createContext,useState,useCallback} from 'react';
import {fetchWithoutToken,fetchWithToken} from '../helpers/fetch';
export const AuthContext = createContext();

const initialState = {
    id:null,
    checking:true,
    logged:false,
    name:null,
    email:null
};

export const AuthProvider = ({children}) =>{
    const [auth, setAuth] = useState(initialState);
    const login = async(email,password)=>{
        const resp = await fetchWithoutToken('auth/login',{email,password},'POST');
        if (resp.ok){
            const jsonMsg = await resp.json();
            localStorage.setItem('token', jsonMsg.token);
            setAuth({
                id:jsonMsg.id,
                checking:false,
                logged:true,
                name:jsonMsg.name,
                email:jsonMsg.email
            })
            return true;
        }   
        return resp.ok;
    };
    const register = async(nombre,email,password,enabled)=>{
        const resp = await fetchWithoutToken('auth/register',{nombre,email,password,enabled},'POST');
        if (resp.ok){
            const jsonMsg = await resp.json();
            localStorage.setItem('token',jsonMsg.token);
            setAuth({
                id:jsonMsg.id,
                checking:false,
                logged:true,
                name:jsonMsg.name,
                email:jsonMsg.email
            })
            return true;
        }   
        return resp.ok;
    };
    const verifyToken = useCallback( async () => {
        const token = localStorage.getItem('token');
        if(!token){
           setAuth({
                id:null,
                checking:false,
                logged:false,
                name:null,
                email:null
            })
            return false;
        }
        const resp = await fetchWithToken('auth/renew');
        if (resp.ok){
            const jsonMsg = await resp.json();
            localStorage.setItem('token',jsonMsg.token);
            setAuth({
                id:jsonMsg.id,
                checking:false,
                logged:true,
                name:jsonMsg.name,
                email:jsonMsg.email
            })
            return true;
        }else{
            setAuth({
                id:null,
                checking:false,
                logged:false,
                name:null,
                email:null
            })
            return false;
        }   
    },[]); 
    const logout = () =>{
        localStorage.removeItem('token');
        setAuth({
            checking:false,
            logged:false
        })

    };
    return(
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verifyToken,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
