import React,{useEffect,useState,useContext,useCallback} from "react";
import {Link} from "react-router-dom";
import imgQuest from '../../img/books.png'
import {fetchWithToken} from '../../helpers/fetch';
import {AuthContext} from '../../auth/AuthContext';

export const ListTask = () =>{

    const [ini,setIni] = useState(false);
    const [quiz,setQuiz] = useState([]);
    const {auth} = useContext(AuthContext);

    const getAllQuiz = useCallback(async() =>{
        const resp = await fetchWithToken(`quiz/listAll/${auth.id}`,null,'GET');
        
        if (resp.ok){
            const quiz = await resp.json();
            setQuiz(quiz); 
        } 
    },[auth])

    const removeQuiz = async (id) =>{
        const resp = await fetchWithToken(`quiz/${id}`,null,'DELETE');
        if(resp.ok){
            getAllQuiz();
        } 
    }

    useEffect(()=> {
        if(!ini){        
            setIni(true);
            (async function (){
                getAllQuiz();  
            })();
        }
    },[ini,getAllQuiz]);

    return (
        <div className="card">
                 {
                    quiz.map((e)=>(
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
                                        <p className="p">{
                                            e.updatedAt
                                        }</p>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown">
                                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <button className="dropdown-item" onClick={()=>{
                                            removeQuiz(e.id);
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