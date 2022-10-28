import {React,useContext} from 'react';
import {AuthContext} from '../auth/AuthContext';

export const MainNavegation = () => {
    const {auth,logout} = useContext(AuthContext);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary static-top" id="barraNav">
                <div className="container">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="">Inicio
                        <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Reportes</a>
                    </li>
                        <li className="nav-item">
                        <a className="nav-link" href="">Gamificacion</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                            onClick={logout}
                        >Salir</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}