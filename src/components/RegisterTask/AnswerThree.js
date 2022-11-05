import React,{useContext} from "react";
import { GetBoton } from "./GetBoton";
import {QuestionContext} from './QuestionForm';

export const AnswerThree = () => {

    const {parametric,actualizarParametric} = useContext(QuestionContext);

    const actualizarValorBtn3 = () => {
        if (parametric.valAnswerThree === 0) 
            actualizarParametric({
                ...parametric,
                valAnswerThree:1
            });
        else
            actualizarParametric({
                ...parametric,
                valAnswerThree:0
            });
    }

    const actualizarInputBtn3 = ({target}) =>{
        const {value} = target;
        actualizarParametric({
                ...parametric,
                inAnswerThree:value
            })
    }
 
    return (
        <div className="col">
                <div className="input-group">
                <div className="input-group-prepend">
                <button className="btn btn-warning" onClick={actualizarValorBtn3}> 
                    <GetBoton btn={parametric.valAnswerThree}/>
                </button>
                </div>
                <input className="form-control" type="text" placeholder="Opcion3" value={parametric.inAnswerThree} onChange={actualizarInputBtn3}/>
                </div>
        </div>
    )
}