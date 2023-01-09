import React,{useContext} from "react";
import { GetBoton } from "./GetBoton";
import {QuestionContext} from './QuestionForm';

export const AnswerThree = () => {

    const {parametric,updateParametric} = useContext(QuestionContext);

    const setValueBtn3 = () => {
        if (parametric.valAnswerThree === 0) 
            updateParametric({
                ...parametric,
                valAnswerThree:1
            });
        else
            updateParametric({
                ...parametric,
                valAnswerThree:0
            });
    }

    const setInputBtn3 = ({target}) =>{
        const {value} = target;
        updateParametric({
            ...parametric,
            inAnswerThree:value
        })
    }
 
    return (
        <div className="col">
                <div className="input-group">
                <div className="input-group-prepend">
                <button className="btn btn-warning" onClick={setValueBtn3}> 
                    <GetBoton btn={parametric.valAnswerThree}/>
                </button>
                </div>
                <input className="form-control" type="text" placeholder="Option3" value={parametric.inAnswerThree} onChange={setInputBtn3}/>
                </div>
        </div>
    )
}