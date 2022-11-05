import {React} from 'react';
import { MainNavegation } from '../components/MainNavegation';
import { QuestionForm } from '../components/RegisterTask/QuestionForm';
import '../css/registerTask.css';

export const RegisterTask = () =>{

    return (
        <div>
        <MainNavegation/>
        <div className="container-fluid" id="contenedorCuestionario">
        <div className="row justify-content-center">
        <QuestionForm/>
        </div>
        </div>
        </div>
    )
}