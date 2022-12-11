import React, { useState,useContext,useEffect,useCallback} from "react";
import { useParams } from "react-router-dom";
import { faFloppyDisk,faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { MainNavegation } from '../../components/MainNavegation';
import { fetchConToken } from "../../helpers/fetch";
import { FilePhoto } from './FilePhoto';
import { InputTask } from './InputTask';
import { BarPoints } from './BarPoints';
import { BarTime } from './BarTime';
import { AnswerOne } from './AnswerOne';
import { AnswerTwo } from './AnswerTwo';
import { AnswerThree } from './AnswerThree';
import { AnswerFour } from './AnswerFour';
import { ParametricComponent } from "./ParametricComponent";
import {AuthContext} from '../../auth/AuthContext';
import '../../css/registerTask.css';

export const QuestionContext = React.createContext();

export const QuestionForm = () => {
   
    const {idQuest} = useParams();
    const {auth} = useContext(AuthContext);
    const [ini,setIni] = useState(false);
    const [topId,setTopId] = useState(uuidv4());

    const [formQuest,setFormQuest] = useState({
        nombre:'',
        descripcion:''
    })
    
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
    

    const onChangeFormQuest = ({target}) =>{
		const {name,value} = target;
		setFormQuest({
			...formQuest,
			[name]:value
		});
	}

    const guardarCuestionario = useCallback(async() =>{
        var elementFila = [];
        filaParam.map((e)=>{
            elementFila.push({
                _id:e.props.id,
                inputTask:e.props.parametric.inputTask,
                filePhoto:e.props.parametric.filePhoto,
                barPoints:e.props.parametric.barPoints,
                barTime:e.props.parametric.barTime,
                inAnswerOne:e.props.parametric.inAnswerOne,
                inAnswerTwo:e.props.parametric.inAnswerTwo,
                inAnswerThree:e.props.parametric.inAnswerThree,
                inAnswerFour:e.props.parametric.inAnswerFour,
                valAnswerOne:e.props.parametric.valAnswerOne,
                valAnswerTwo:e.props.parametric.valAnswerTwo,
                valAnswerThree:e.props.parametric.valAnswerThree,
                valAnswerFour:e.props.parametric.valAnswerFour
            });
            return e;
        });
    
        const {ok} = await fetchConToken(
            'cuestionario',
            {
                idCuest:idQuest,
                idUsuario:auth.uid,
                nombre:formQuest.nombre,
                descripcion:formQuest.descripcion,
                parametric:elementFila},
            'POST');
        
        if(ok){
            Swal.fire({
                icon: 'success',
                title: 'El cuestionario ha sido guardado con éxito.',
                showConfirmButton: false,
                timer: 1500
              });
        }
    },[idQuest,auth,filaParam,formQuest])

    const guardarCuestionarioConValidacion = async()=>{
        if(formQuest.nombre === null || formQuest.nombre === ''){
            Swal.fire({
                icon: 'error',
                title: 'Error al guardar el questionario',
                text: 'Ingresa el nombre del questionario antes de guardarlo.'
            })
        }else{
            guardarCuestionario();
        }    
    }

    useEffect(()=> {
        if(!ini){        
            (async function (){
            const resp = await fetchConToken(`cuestionario/${idQuest}`);
                if(resp.ok){
                    const respFilaParam = resp.cuestionario.filaParam;
                    const {nombre,descripcion} = resp.cuestionario;
                    var filaAux = [];
                    respFilaParam.map( (e)=>{
                        filaAux.push(
                        <ParametricComponent 
                        key={uuidv4()}
                        id={e._id} 
                        parametric={{
                            inputTask:e.inputTask,
                            filePhoto:e.filePhoto,
                            barPoints:e.barPoints,
                            barTime:e.barTime,
                            inAnswerOne:e.inAnswerOne,
                            inAnswerTwo:e.inAnswerTwo,
                            inAnswerThree:e.inAnswerThree,
                            inAnswerFour:e.inAnswerFour,
                            valAnswerOne:e.valAnswerOne,
                            valAnswerTwo:e.valAnswerTwo,
                            valAnswerThree:e.valAnswerThree,
                            valAnswerFour:e.valAnswerFour
                        }}
                        />);

                        return e;
                    });
                    setFormQuest({
                        nombre:nombre,
                        descripcion:descripcion
                    });
                    setFilaParam(filaAux);
                    setTopId('')
                }  
            })();
            setIni(true);
        }
    },[ini,idQuest,setFilaParam,setTopId,setFormQuest]);

    return (
        <QuestionContext.Provider value={{
            topId,
            parametric,
            actualizarParametric,
            eliminarParametrica,
            mostrarParametrica
            }}>
        <MainNavegation/>
        <div className="container-fluid" id="contenedorCuestionario">
        <div className="row justify-content-center">          
        <div className="col" id="colScroll">
            <div className="container-fluid bg-dark">
                <button className="btn btn-danger mt-2 mb-2" onClick={generarNuevoParam}>Nuevo</button>
                <button className="btn btn-light mt-2 mb-2 ml-2"  data-toggle="modal" data-target="#configuracioncuestionario"><FontAwesomeIcon icon={faGear}/></button>
                <button className="btn btn-light mt-2 mb-2 ml-2" onClick={guardarCuestionarioConValidacion}><FontAwesomeIcon icon={faFloppyDisk}></FontAwesomeIcon></button> 
                <div className="modal fade" id="configuracioncuestionario" tabIndex="-1" aria-labelledby="confQuesModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="confQuesModalLabel">Información del questionario</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="form-group">
                        <label>Nombre</label>
                        <input className="form-control" type="text" name="nombre" value={formQuest.nombre} onChange={onChangeFormQuest}/>
                    </div>
                    <div className="form-group">
                        <label>Descripción</label>
                        <textarea className="form-control" rows="3" name="descripcion" value={formQuest.descripcion} onChange={onChangeFormQuest}></textarea>
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={guardarCuestionarioConValidacion} data-dismiss="modal">Guardar</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container-fluid bg-dark"  id="my-custom-scrollbar">
                {
                    filaParam
                }          
            </div>
            <div></div>
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
        <div className="mt-4 alert alert-secondary" role="alert"><p className="text-center">Selecciona un pregunta.</p></div>
        }
        </div>
        </div>
        </div>        
        </QuestionContext.Provider>
    );

}