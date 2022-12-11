import React,{useContext} from "react";
import imgPerfil from '../../img/perfil.png'
import {AuthContext} from '../../auth/AuthContext';


export const Perfil = () =>{

    const {auth} = useContext(AuthContext);
    
    return(
        <div className="col-lg-3 mt-4">
        <div className="card">
        <div className="header-p">
        <button >
        <img className="img-thumbnail" src={imgPerfil} alt="img"/>
        </button>
        <h4>
        </h4>
        </div>
        <div className="descripcion-p">
        <h6 className="h6">{auth.name}</h6>
        <h6 className="text-muted h6 mt-2">{auth.email}</h6>
        </div>
        </div>
        </div>
    )
}
