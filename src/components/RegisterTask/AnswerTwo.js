import React,{useContext} from "react";
import { GetBoton } from "./GetBoton";
import {QuestionContext} from './QuestionForm';

export const AnswerTwo = ()=> {

    const {parametric,updateParametric} = useContext(QuestionContext);

    const setValueBtn2 = () => {
        if (parametric.valAnswerTwo === 0) 
            updateParametric({
                ...parametric,
                valAnswerTwo:1
            });
        else
            updateParametric({
                ...parametric,
                valAnswerTwo:0
            });
    }

    const setInputBtn2 = ({target}) =>{
        const {value} = target;
        updateParametric({
            ...parametric,
            inAnswerTwo:value
        })
    }

    return(
        <div className="col">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
        <button className="btn btn-primary" onClick={setValueBtn2}> 
            <GetBoton btn={parametric.valAnswerTwo}/>
        </button>
        </div>
        <input type="text" placeholder="Option2" className="form-control" value={parametric.inAnswerTwo} onChange={setInputBtn2}/>
        </div>
        </div>
    ) 
}