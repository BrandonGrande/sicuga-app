import React,{useEffect,useContext} from "react";
import {QuestionContext} from '../components/QuestionForm';

export const BarPoints = () =>{
    
    const {parametric,actualizarParametric} = useContext(QuestionContext);

    const actualizarBarra = () => {
        var elInput3 = document.querySelector('#input3');
        if (elInput3) {
            var w = parseInt(window.getComputedStyle(elInput3, null).getPropertyValue('width'));
            var etq = document.querySelector('.etiqueta');
            if (etq) {
                etq.innerHTML = elInput3.value;
                actualizarParametric({
                    ...parametric,
                    barPoints:elInput3.value
                });
                var pxls = w / 200;
                etq.style.left = ((elInput3.value * pxls) - 15) + 'px';
            }
        }
    }

    return (
        <div className="col">
        <h5 className="mb-5 text-center">Puntos</h5>
        <div className="inputDiv mx-auto">
        <div className="etiqueta"></div>
        <input type="range" value={parametric.barPoints}  min="0" max="200" autoComplete="off" id="input3" onChange={actualizarBarra}/>
        </div>
        </div>
    )
} 