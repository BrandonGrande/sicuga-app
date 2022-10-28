import React, { useState } from "react";
import { FilePhoto } from '../components/FilePhoto';
import { InputTask } from '../components/InputTask';
import { BarPoints } from '../components/BarPoints';
import { BarTime } from '../components/BarTime';
import { AnswerOne } from '../components/AnswerOne';
import { AnswerTwo } from '../components/AnswerTwo';
import { AnswerThree } from '../components/AnswerThree';
import { AnswerFour } from '../components/AnswerFour';

export const QuestionContext = React.createContext();

export const QuestionForm = () => {    

    const [parametric, setParametric] = useState({
            inputTask:'',
            filePhoto:'',
            barPoints:0,
            barTime: 0,
            answerOne:0,
            answerTwo:0,
            answerThree:0,
            answerFour:0
        });

    const actualizarParametric = (value) =>{
        setParametric(
            value
        );
    }
    
    return (
        <QuestionContext.Provider value={{
            parametric,
            actualizarParametric
            }}>
        <div className="col-10">
        <InputTask/>
        <FilePhoto/>
        <div className="row justify-content-center">
        <BarPoints/>
        <BarTime/>
        </div>
        <div className="container" id="contenedorInput">
        <div className="row">
        <AnswerOne/>
        <AnswerTwo/>
        </div>
        <div className="row">
        <AnswerThree/>
        <AnswerFour/>
        </div>
        </div>
        </div>
        </QuestionContext.Provider>
    );

}