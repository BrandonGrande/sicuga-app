import React,{useContext} from "react";
import { GetBoton } from "./GetBoton";
import {QuestionContext} from './QuestionForm';

export const AnswerOne = () =>{

    const {parametric,actualizarParametric} = useContext(QuestionContext);

    const actualizarValorBtn1 = () => {
        if (parametric.valAnswerOne === 0) 
            actualizarParametric({
                ...parametric,
                valAnswerOne:1
            });
        else
            actualizarParametric({
                ...parametric,
                valAnswerOne:0
            });
    }
    
    const actualizarInputBtn1 = ({target}) =>{
        const {value} = target;
        actualizarParametric({
                ...parametric,
                inAnswerOne:value
            })
    }

    return(
        <div className="col">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
        <button className="btn btn-danger" onClick={actualizarValorBtn1}> 
            <GetBoton btn={parametric.valAnswerOne}/>
        </button>
        </div>
        <input className="form-control"  type="text" value={parametric.inAnswerOne} onChange={actualizarInputBtn1} placeholder="Opcion1"/>
        </div>
        </div>
    )
}