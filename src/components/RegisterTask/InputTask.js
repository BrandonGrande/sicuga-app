import React,{useContext} from "react";
import {QuestionContext} from './QuestionForm';

export const InputTask = () => {

    const {parametric,updateParametric} = useContext(QuestionContext);

    const setQuestion = ({target}) =>{
        const {value} = target;
        updateParametric({
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
            placeholder="Question..." 
            id="question"
            value={parametric.inputTask} 
            onChange={setQuestion}/>
        </div>
        </div>
        </div>
    )
}