import React,{useContext} from "react";
import { GetBoton } from "./GetBoton";
import {QuestionContext} from '../components/QuestionForm';

export const AnswerThree = () => {

    const {parametric,actualizarParametric} = useContext(QuestionContext);

    const actualizarValorBtn3 = () => {
        if (parametric.answerThree === 0) 
            actualizarParametric({
                ...parametric,
                answerThree:1
            });
        else
            actualizarParametric({
                ...parametric,
                answerThree:0
            });
    }
 
    return (
        <div className="col">
                <div className="input-group">
                <div className="input-group-prepend">
                <button className="btn btn-warning" onClick={actualizarValorBtn3}> 
                    <GetBoton btn={parametric.answerThree}/>
                </button>
                </div>
                <input id="op3" className="form-control"  type="text" name="opcion3" placeholder="Opcion3"/>
                </div>
        </div>
    )
}