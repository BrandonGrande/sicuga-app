import {React} from 'react';
import '../css/mainUser.css';
import { MainNavegation } from '../components/MainNavegation';
import { Perfil } from '../components/MainUser/Perfil';
import { SearchTaskBar } from '../components/MainUser/SearchTaskBar';
export const MainUser  = () =>{

    return( 
        <div>
            <MainNavegation/>
            <div className="container" id="primeraSeccion"> 
            <div className="row">
            <Perfil/>
            <SearchTaskBar/>
            </div>
            </div>
        </div>
        )
} 