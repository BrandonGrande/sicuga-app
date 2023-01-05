import React,{useEffect,useState,useCallback} from "react";
import imgQuest from '../../img/books.png'
import { Link } from "react-router-dom";
import {fetchConToken} from '../../helpers/fetch';
export const ListTask = () =>{

    const [ini,setIni] = useState(false);
    const [cuestionarios,setcuestionarios] = useState([]);

    const consultarCuestionarios = useCallback(async() =>{
        const resp = await fetchConToken('quiz/listAllQuiz',null,"GET");
        if (resp.ok){
            const cuestionarios = await resp.json();
            setcuestionarios(cuestionarios); 
        } 
    },[])

    const eliminarCuestionario = async (id) =>{
        const resp = await fetchConToken(`quiz/${id}`,null,'DELETE');
        if(resp.ok){
            consultarCuestionarios();
        } 
    }

    useEffect(()=> {
        if(!ini){        
            setIni(true);
            (async function (){
                consultarCuestionarios();  
            })();
        }
    },[ini,consultarCuestionarios]);

    return (
        <div className="card">
                 {
                    cuestionarios.map((e)=>(
                        <div className="card-body" key={e.id}>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col-2">
                                        <img src={imgQuest} alt="img" className="img-thumbnail"/>
                                    </div>
                                    <div className="col">
                                        <Link to={`/questionForm/${e.id}`}  className="h5">
                                        {e.name}
                                        </Link>
                                        <h6 className="h6">{e.description}</h6>
                                        <p className="p">{e.createdAt}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown">
                                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <button className="dropdown-item" onClick={()=>{
                                            eliminarCuestionario(e.id);
                                        }}>Eliminar</button>
                                      </div>
                            </div>
                        </div>
                        </div>
                        ))
                 }
        </div>

    )
}