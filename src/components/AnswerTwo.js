import React,{useContext} from "react";
import { GetBoton } from "./GetBoton";
import {QuestionContext} from '../components/QuestionForm';

export const AnswerTwo = ()=> {

    const {parametric,actualizarParametric} = useContext(QuestionContext);

    const actualizarValorBtn2 = () => {
        if (parametric.answerTwo === 0) 
            actualizarParametric({
                ...parametric,
                answerTwo:1
            });
        else
            actualizarParametric({
                ...parametric,
                answerTwo:0
            });
    }

    return(
        <div className="col">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
        <button className="btn btn-primary" onClick={actualizarValorBtn2}> 
            <GetBoton btn={parametric.answerTwo}/>
        </button>
        </div>
        <input id="op2" type="text" name="opcion2" placeholder="Opcion2" className="form-control"/>
        </div>
        </div>
    ) 
}