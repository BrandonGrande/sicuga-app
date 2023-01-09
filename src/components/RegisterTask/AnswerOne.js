import React,{useContext} from "react";
import { GetBoton } from "./GetBoton";
import {QuestionContext} from './QuestionForm';

export const AnswerOne = () =>{

    const {parametric,updateParametric} = useContext(QuestionContext);

    const setValueBtn1 = () => {
        if (parametric.valAnswerOne === 0) 
            updateParametric({
                ...parametric,
                valAnswerOne:1
            });
        else
            updateParametric({
                ...parametric,
                valAnswerOne:0
            });
    }
    
    const setInputBtn1 = ({target}) =>{
        const {value} = target;
        updateParametric({
            ...parametric,
            inAnswerOne:value
        })
    }

    return(
        <div className="col">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
        <button className="btn btn-danger" onClick={setValueBtn1}> 
            <GetBoton btn={parametric.valAnswerOne}/>
        </button>
        </div>
        <input className="form-control"  type="text" value={parametric.inAnswerOne} onChange={setInputBtn1} placeholder="Option1"/>
        </div>
        </div>
    )
}