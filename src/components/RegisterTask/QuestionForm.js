import React, { useState,useContext,useEffect } from "react";
import { FilePhoto } from './FilePhoto';
import { InputTask } from './InputTask';
import { BarPoints } from './BarPoints';
import { BarTime } from './BarTime';
import { AnswerOne } from './AnswerOne';
import { AnswerTwo } from './AnswerTwo';
import { AnswerThree } from './AnswerThree';
import { AnswerFour } from './AnswerFour';
import { ParametricComponent } from "./ParametricComponent";
import {SocketContext} from '../../context/SocketContext';
import {AuthContext} from '../../auth/AuthContext';
import { v4 as uuidv4 } from 'uuid';

export const QuestionContext = React.createContext();

export const QuestionForm = () => {

    const [idQuest] = useState(uuidv4());
    const {auth} = useContext(AuthContext);
    const {socket} = useContext(SocketContext);

    useEffect(() => {
        socket?.on('questionario',(mensaje)=>{
            console.log(mensaje)  
        });
        
    }, [socket])

    const [topId,setTopId] = useState(uuidv4());

    const [parametric, setParametric] = useState({
        inputTask:'',
        filePhoto:'',
        barPoints:0,
        barTime: 0,
        inAnswerOne:'',
        inAnswerTwo:'',
        inAnswerThree:'',
        inAnswerFour:'',
        valAnswerOne:0,
        valAnswerTwo:0,
        valAnswerThree:0,
        valAnswerFour:0
    });

    const mostrarParametrica = (ownParametric,id) =>{
        setParametric(
            ownParametric
        );
        setTopId(id);
    }
        
    const eliminarParametrica = (id) =>{
        var nuevaFilaParam = [];
        filaParam.map((e)=>{
            if (e.props.id !== id){
                nuevaFilaParam.push(e)
            }
            return e;
        });
        setFilaParam(nuevaFilaParam);
        if(id === topId){
            setTopId('');
        }
    }  
    
    const [filaParam, setFilaParam] = useState([<ParametricComponent
        key={uuidv4()} 
        id={topId} 
        parametric={{
            inputTask:'',
            filePhoto:'',
            barPoints:0,
            barTime: 0,
            inAnswerOne:'',
            inAnswerTwo:'',
            inAnswerThree:'',
            inAnswerFour:'',
            valAnswerOne:0,
            valAnswerTwo:0,
            valAnswerThree:0,
            valAnswerFour:0
        }}
        />]);


    const actualizarParametric = (value) =>{
        setParametric(
            value
        );
        var nuevaFilaParam = [];
        filaParam.map((e)=>{
            if (e.props.id === topId){
                nuevaFilaParam.push(
                    <ParametricComponent
                    key={uuidv4()} 
                    id={e.props.id} 
                    parametric={value}
                    />
                )
            }else{
                nuevaFilaParam.push(e)
            }
            return e;
        });
        setFilaParam(nuevaFilaParam);
        socket.emit('questionario',
            {
                idQuest:idQuest,
                idUsuario:auth.uid,
                parametric:value
            }
        );
    }

    const generarNuevoParam = () => {
        filaParam.push(
        <ParametricComponent 
            key={uuidv4()}
            id={uuidv4()} 
            parametric={{
                inputTask:'',
                filePhoto:'',
                barPoints:0,
                barTime: 0,
                inAnswerOne:'',
                inAnswerTwo:'',
                inAnswerThree:'',
                inAnswerFour:'',
                valAnswerOne:0,
                valAnswerTwo:0,
                valAnswerThree:0,
                valAnswerFour:0
            }}
            />
        );
        setParametric({
            ...parametric
        });
    }
    
    return (
        <QuestionContext.Provider value={{
            topId,
            parametric,
            actualizarParametric,
            eliminarParametrica,
            mostrarParametrica
            }}>
                   
        <div className="col" id="colScroll">
            <div className="container-fluid bg-dark">
                <button className="btn btn-danger mt-2 mb-2" id="nuevo" onClick={generarNuevoParam}>Nuevo</button>
            </div>
            <div className="container-fluid bg-dark"  id="my-custom-scrollbar">
                {
                    filaParam
                }          
            </div>
        </div>
   
        <div className="col-10">
        {
        (filaParam.length !==0 && topId!=='') ?
            <div>
            <InputTask />
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
        :
        <div className="mt-4 alert alert-secondary" role="alert"><p class="text-center">Selecciona un pregunta.</p></div>
        }
        </div>
        
        </QuestionContext.Provider>
    );

}