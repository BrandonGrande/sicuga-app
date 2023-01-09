import React,{useContext} from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {QuestionContext} from './QuestionForm';

export const ParametricComponent = (props) => {

    const {topId,showParametric,deleteParametric} = useContext(QuestionContext);

    return (
        <div id="blockContent">
        {  topId === props.id ?
        <p className="card card-block" id="chosenBlock" onClick={() => showParametric(props.parametric,props.id)}></p>           
        :
        <p className="card card-block" onClick={() => showParametric(props.parametric,props.id)}></p>           
        }
        <button id="btnElimQues" className="btn btn-light mb-3" onClick={() =>deleteParametric(props.id)}>
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
        </div>
    ) 
}