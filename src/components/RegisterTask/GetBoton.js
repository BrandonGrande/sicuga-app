import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const GetBoton = (props) => {
   
    return(
        props.btn === 0 ? <div></div> : 
        <FontAwesomeIcon icon={faCheckCircle}/>  
    )
}