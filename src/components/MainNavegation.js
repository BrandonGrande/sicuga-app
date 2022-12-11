import {React,useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../auth/AuthContext';

export const MainNavegation = () => {
    const {logout} = useContext(AuthContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger static-top" id="barraNav">
                <div className="container">
                <button className="navbar-brand"></button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Inicio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link"
                            onClick={logout}
                        >Salir</button>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}