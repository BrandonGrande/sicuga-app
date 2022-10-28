import {React} from 'react';
import { MainNavegation } from '../components/MainNavegation';
import { QuestionForm } from '../components/QuestionForm';
import '../css/registerTask.css';

export const RegisterTask = () =>{

    return (
    
        <div>
        <MainNavegation/>
        <div className="container-fluid" id="contenedorCuestionario">
        <div className="row justify-content-center">
            
            <div className="col" id="colScroll" >
                <div className="container-fluid bg-dark">
                <a className="btn btn-danger mt-2 mb-2" id="nuevo">Nuevo</a>
                </div>
                <div className="container-fluid bg-dark"  id="my-custom-scrollbar">
                    <a className="card card-block bg-light"></a>
                </div>
            </div>

        <QuestionForm/>
            
        </div>
        </div>
        </div>
    )
}