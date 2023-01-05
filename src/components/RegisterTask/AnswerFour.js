import React,{useContext} from "react";
import { GetBoton } from "./GetBoton";
import {QuestionContext} from './QuestionForm';

export const AnswerFour = () =>{

    const {parametric,actualizarParametric} = useContext(QuestionContext);

    const actualizarValorBtn4 = () => {
        if (parametric.valAnswerFour === 0) 
            actualizarParametric({
                ...parametric,
                valAnswerFour:1
            });
        else
            actualizarParametric({
                ...parametric,
                valAnswerFour:0
            });
    }

    const actualizarInputBtn4 = ({target}) =>{
        const {value} = target;
        actualizarParametric({
                ...parametric,
                inAnswerFour:value
            })
    }

    return(
        <div className="col">
        <div className="input-group">
        <div className="input-group-prepend">
        <button className="btn btn-success" onClick={actualizarValorBtn4}> 
            <GetBoton btn={parametric.valAnswerFour}/>
        </button>
        </div>
        <input className="form-control"  type="text" placeholder="Opcion4" value={parametric.inAnswerFour} onChange={actualizarInputBtn4}/>
        </div>
        </div>
    ) 
}