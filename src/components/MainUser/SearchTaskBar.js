import React from "react";
import { Link } from 'react-router-dom';

export const SearchTaskBar = () =>{

    return (
        <div className="col-lg-9 mb-4 mt-4">
        <div className="row" id="busqueda">
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <div className="form-group">
        <div className="input-group">
            <input type="text" className="form-control " name="searchText" placeholder="Buscar..." id="buscar"/>
        </div>
        </div>
        </div>
        </div>
        <div className="col">
                <div className="card my-4" id="contenedorResultados">
                    <div className="card-body">
                    <ul id="container"></ul>
                    </div>
                </div>
        </div>
        <div className="table-responsive">
        <table className="table table-bordered table-condensed bg-white">
        <thead>
        <tr id="tituloClase">
          <th>Mis cuestionarios<Link to="/registerTask" className="btn float-right btn-success" 
            type="button">Crear nuevo</Link></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>
        <div className="container bg-white"  id="seccionCuestionarios">
        </div>
        </td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
    )
}