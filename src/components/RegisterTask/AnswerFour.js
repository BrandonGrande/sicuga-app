import React,{useContext} from "react";
import { GetBoton } from "./GetBoton";
import {QuestionContext} from './QuestionForm';

export const AnswerFour = () =>{

    const {parametric,updateParametric} = useContext(QuestionContext);

    const setValueBtn4 = () => {
        if (parametric.valAnswerFour === 0) 
            updateParametric({
                ...parametric,
                valAnswerFour:1
            });
        else
            updateParametric({
                ...parametric,
                valAnswerFour:0
            });
    }

    const setInputBtn4 = ({target}) =>{
        const {value} = target;
        updateParametric({
            ...parametric,
            inAnswerFour:value
        })
    }

    return(
        <div className="col">
        <div className="input-group">
        <div className="input-group-prepend">
        <button className="btn btn-success" onClick={setValueBtn4}> 
            <GetBoton btn={parametric.valAnswerFour}/>
        </button>
        </div>
        <input className="form-control"  type="text" placeholder="Option4" value={parametric.inAnswerFour} onChange={setInputBtn4}/>
        </div>
        </div>
    ) 
}