import React,{useContext} from "react";
import {QuestionContext} from '../components/QuestionForm';


export const InputTask = () => {

    const {parametric,actualizarParametric} = useContext(QuestionContext);

    const actualizarPregunta = ({target}) =>{
        const {value} = target;
        actualizarParametric({
                ...parametric,
                inputTask:value
            })
    }

    return (
        <div className="row justify-content-center">
        <div className="col  mb-4 mt-4">
        <div className="input-group">
        <input 
            type="text" 
            className="form-control" 
            placeholder="Pregunta..." 
            id="pregunta"
            value={parametric.inputTask} 
            onChange={actualizarPregunta}/>
        </div>
        </div>
        </div>
    )
}