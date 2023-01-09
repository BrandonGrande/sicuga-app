import React, { useState,useContext,useEffect,useCallback} from "react";
import { useParams } from "react-router-dom";
import { faFloppyDisk,faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { MainNavegation } from '../../components/MainNavegation';
import { fetchWithToken } from "../../helpers/fetch";
import { FilePhoto } from './FilePhoto';
import { InputTask } from './InputTask';
import { BarPoints } from './BarPoints';
import { BarTime } from './BarTime';
import { AnswerOne } from './AnswerOne';
import { AnswerTwo } from './AnswerTwo';
import { AnswerThree } from './AnswerThree';
import { AnswerFour } from './AnswerFour';
import { ParametricComponent } from "./ParametricComponent";
import '../../css/registerTask.css';
import {AuthContext} from '../../auth/AuthContext';

export const QuestionContext = React.createContext();

export const QuestionForm = () => {
   
    const {idQuest} = useParams();
    const [ini,setIni] = useState(false);
    const [topId,setTopId] = useState(uuidv4());
    const {auth} = useContext(AuthContext);

    const [formQuest,setFormQuest] = useState({
        name:'',
        description:''
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

    const showParametric = (ownParametric,id) =>{
        setParametric(
            ownParametric
        );
        setTopId(id);
    }
        
    const deleteParametric = (id) =>{
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
    
    const updateParametric = (value) =>{
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

    const generateParam = () => {
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

    const saveQuiz = useCallback(async() =>{
        var listParam = [];
        filaParam.map((e)=>{
            listParam.push({
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
    
        const resp = await fetchWithToken(
            'quiz/saveQuiz',
            {
                id:idQuest,
                name:formQuest.name,
                description:formQuest.description,
                listParam:listParam,
                idUser:auth.id
            },
            'POST');
        if(resp.ok){
            Swal.fire({
                icon: 'success',
                title: 'Quiz has been saved successfully',
                showConfirmButton: false,
                timer: 1500
              });
        }
    },[idQuest,filaParam,formQuest,auth])

    const saveQuizWithValidation = async()=>{
        if(!formQuest.name){
            Swal.fire({
                icon: 'error',
                title: 'Error saving quiz',
                text: 'Enter the quiz name before saving.'
            })
        }else{
            saveQuiz();
        }    
    }

    useEffect(()=> {
        if(!ini){        
            (async function (){
            const resp = await fetchWithToken(`quiz/${idQuest}`);
                if(resp.ok){
                    const jsonQuiz = await resp.json();
                    const {name,description,listParam} = jsonQuiz;
                    var filaAux = [];
                    listParam.map( (e)=>{
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
                        name:name,
                        description:description
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
            updateParametric,
            deleteParametric,
            showParametric
            }}>
        <MainNavegation/>
        <div className="container-fluid" id="contenedorCuestionario">
        <div className="row justify-content-center">          
        <div className="col" id="colScroll">
            <div className="container-fluid bg-dark">
                <button className="btn btn-danger mt-2 mb-2" onClick={generateParam}>New</button>
                <button className="btn btn-light mt-2 mb-2 ml-2"  data-toggle="modal" data-target="#configuracioncuestionario"><FontAwesomeIcon icon={faGear}/></button>
                <button className="btn btn-light mt-2 mb-2 ml-2" onClick={saveQuizWithValidation}><FontAwesomeIcon icon={faFloppyDisk}></FontAwesomeIcon></button> 
                <div className="modal fade" id="configuracioncuestionario" tabIndex="-1" aria-labelledby="confQuesModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="confQuesModalLabel">Quiz information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" type="text" name="name" value={formQuest.name} onChange={onChangeFormQuest}/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" rows="3" name="description" value={formQuest.description} onChange={onChangeFormQuest}></textarea>
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={saveQuizWithValidation} data-dismiss="modal">Save</button>
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
        <div className="mt-4 alert alert-secondary" role="alert"><p className="text-center">Select a question.</p></div>
        }
        </div>
        </div>
        </div>        
        </QuestionContext.Provider>
    );

}