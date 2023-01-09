import React,{useContext} from "react";
import {QuestionContext} from './QuestionForm';

export const BarTime = () =>{

    const {parametric,updateParametric} = useContext(QuestionContext);

    const setBarTime = ({target}) => {
        const {value} = target;
        updateParametric({
            ...parametric,
            barTime:value
        });
    }
    
    return(
        <div className="col">
        <div className="row justify-content-center">
        <div className="col-6">
        <div className="form-group">
        <h5 className="mb-4 text-center">Time(Sec)</h5>
        <select className="form-control" id="selecTiempo" value={parametric.barTime} onChange={setBarTime}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="60">60</option>
        <option value="90">90</option>
        <option value="120">120</option>
        <option value="240">240</option>
        </select>
        </div>
        </div>
        </div>
        </div>
    ) 
}