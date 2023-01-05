import React,{useContext} from "react";
import { GetBoton } from "./GetBoton";
import {QuestionContext} from './QuestionForm';

export const AnswerTwo = ()=> {

    const {parametric,actualizarParametric} = useContext(QuestionContext);

    const actualizarValorBtn2 = () => {
        if (parametric.valAnswerTwo === 0) 
            actualizarParametric({
                ...parametric,
                valAnswerTwo:1
            });
        else
            actualizarParametric({
                ...parametric,
                valAnswerTwo:0
            });
    }

    const actualizarInputBtn2 = ({target}) =>{
        const {value} = target;
        actualizarParametric({
                ...parametric,
                inAnswerTwo:value
            })
    }

    return(
        <div className="col">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
        <button className="btn btn-primary" onClick={actualizarValorBtn2}> 
            <GetBoton btn={parametric.valAnswerTwo}/>
        </button>
        </div>
        <input type="text" placeholder="Opcion2" className="form-control" value={parametric.inAnswerTwo} onChange={actualizarInputBtn2}/>
        </div>
        </div>
    ) 
}