import React,{useContext} from "react";
import {QuestionContext} from './QuestionForm';

export const BarPoints = () =>{
    
    const {parametric,updateParametric} = useContext(QuestionContext);

    const setBarra = ({target}) => {
        const {value} = target;
        updateParametric({
            ...parametric,
            barPoints:value
        });
    }

    return (
        <div className="col">
            <div className="row justify-content-center">
                <h5 className="">Points: {parametric.barPoints}</h5>
            </div>
            <div className="row justify-content-center mt-4">
               <input type="range" value={parametric.barPoints}  min="0" max="200" autoComplete="off" id="input3" onChange={setBarra}/>
            </div>
        </div>
    )
} 