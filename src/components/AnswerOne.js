import React,{useContext} from "react";
import { GetBoton } from "./GetBoton";
import {QuestionContext} from '../components/QuestionForm';

export const AnswerOne = () =>{


    const {parametric,actualizarParametric} = useContext(QuestionContext);

    const actualizarValorBtn1 = () => {
        if (parametric.answerOne === 0) 
            actualizarParametric({
                ...parametric,
                answerOne:1
            });
        else
            actualizarParametric({
                ...parametric,
                answerOne:0
            });
    }

    return(
        <div className="col">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
        <button className="btn btn-danger" onClick={actualizarValorBtn1}> 
            <GetBoton btn={parametric.answerOne}/>
        </button>
        </div>
        <input id="op1" className="form-control"  type="text" name="opcion1" placeholder="Opcion1"/>
        </div>
        </div>
    )
}