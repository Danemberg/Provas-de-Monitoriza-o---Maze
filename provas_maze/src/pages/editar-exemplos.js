import React , {useState,alert, useEffect} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import '../index.css';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

   const EditarExemplos = () => {
    const {logout} = useAuth0();
    let history = useHistory()
    const {id} = useParams();
    const [exemplos, setExemplo] = useState({
      titulo: "",
      conteudo: "",
      ano: ""
    })
   
    const{titulo, conteudo, ano} = exemplos;
    const onInputChange = e =>{
     setExemplo({...exemplos,[e.target.id]: e.target.value})
    }
    useEffect(() => {
        loadExemplos();
    }, []);

    const onSubmit = async e =>{
      e.preventDefault()
      await axios.put(`http://192.168.1.84/projeto-maze/web/rest/exemplos/${id}`, exemplos);
      history.push("/gerir-exemplos")
    };
    const loadExemplos = async () =>{
        const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/exemplos/${id}`)
        setExemplo(result.data);
    }
        return(  
        <div>
            <nav className="navbar navbar-expand-lg my-navbar">     
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <img className="navbar-left" src={Logo} height="50" width="80" />
                                </li>
                                <li>
                                 <Link to="/gerir-exemplos"><i class="material-icons icone-redirect">subdirectory_arrow_left</i></Link>  
                               </li>
                                <li className="nav-item active title-navbar">
                                        Plataforma para geração de Provas de Monitorização com base no currículo - Maze
                                </li>
                                <li className="nav-item item-navbar">
                                    <Link  onClick={()=>logout()} className="nav-link item-navbar" to="/">Sair</Link>
                                </li>
                            </ul>  
                        </div>
                    </nav>
        <form onSubmit={e =>onSubmit(e)}>
            <div className="card border-danger mb-3 my-card">
                    <div className="card-header titulo">Editar exemplos para provas:
                        <div className="card-body">
                        <div className="col-sm-6">
                        <div className="form-group row campo">
                                <label>Titulo:</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control " id="titulo" name="ano"
                                value={titulo}
                                onChange={e => onInputChange(e)}/>
                            </div>
                        </div>
                      </div>
                            <div className="col">
                                <div className="form-group row campo">
                                        <label>Insira um exemplo:</label>
                                    <div className="col-lg-10">
                                        <textarea className="form-control" rows="10" id="conteudo" name="conteudo"
                                        value={conteudo}
                                        onChange={e => onInputChange(e)}/>
                                    </div>
                                </div>
                                <br></br>
                                <div className="col-sm-3 ">
                                    <div className="form-group row campo">
                                        <label>Ano:</label>
                                        <div className="col-sm-9">
                                        <select  className="form-control" value={exemplos.ano} id="ano" name="ano"
                                               onChange={e => onInputChange(e)}>  
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>         
                                               </select>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button  type="submit" className="btn botao1">Salvar</button>
                                </div> 
                        </div> 
                    </div> 
                </div> 
            </div>  
            </form> 
        </div>
   
        )
    }



export default EditarExemplos;