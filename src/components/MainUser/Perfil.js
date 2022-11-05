import React from "react";
import imgPerfil from '../../img/perfil.png'

export const Perfil = () =>{
    return(
        <div className="col-lg-3 mt-4">
        <div className="card">
        <div className="header-p">
        <button >
        <img src={imgPerfil} alt="img"/>
        </button>
        <h4>
        </h4>
        </div>
        <div className="descripcion-p">
    {/*   
        <h5 id="tc"></h5>
        <h5 id="tr"></h5>
    */
    }
        </div>
        </div>
        </div>
    )
}
