import React,{useContext} from "react";
import { GetBoton } from "./GetBoton";
import {QuestionContext} from '../components/QuestionForm';

export const AnswerFour = () =>{

    const {parametric,actualizarParametric} = useContext(QuestionContext);

    const actualizarValorBtn4 = () => {
        if (parametric.answerFour === 0) 
            actualizarParametric({
                ...parametric,
                answerFour:1
            });
        else
            actualizarParametric({
                ...parametric,
                answerFour:0
            });
    }

    return(
        <div className="col">
        <div className="input-group">
        <div className="input-group-prepend">
        <button className="btn btn-success" onClick={actualizarValorBtn4}> 
            <GetBoton btn={parametric.answerFour}/>
        </button>
        </div>
        <input id="op4" className="form-control"  type="text" name="opcion4" placeholder="Opcion4"/>
        </div>
        </div>
    ) 
}