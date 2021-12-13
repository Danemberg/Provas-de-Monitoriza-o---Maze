import React , {useEffect, useState,alert} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const CriarProvas = () => {
    const {logout} = useAuth0();
    let history = useHistory()
    const [provas, setProva] = useState({
      titulo: "",
      data_de_realizacao: "",
      turma: ""
    })
useEffect(() => {
    loadProvas();
}, []);

const loadProvas = async () =>{
    const result = await axios.get(`http://192.168.134.1/projeto-maze/web/rest/provas`)
    console.log(result);
    setProva(result.data);
}
    const{titulo, data_de_realizacao, turma} = provas;
    const onInputChange = e =>{
     setProva({...provas,[e.target.id]: e.target.value})
    }
    const onSubmit = async e =>{
      e.preventDefault()
        await axios.post("http://192.168.134.1/projeto-maze/web/rest/provas", provas);
        history.push("/inserir-texto-prova")
    };
        return(  
        <div>
            <nav className="navbar navbar-expand-lg my-navbar">     
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <img className="navbar-left" src={Logo} height="50" width="80" />
                                </li>
                                <li>
                            <Link to="/gerir-provas"><i class="material-icons icone-redirect">subdirectory_arrow_left</i></Link>  
                            </li>
                                <li className="nav-item active title-navbar">
                                        Plataforma para geração de Provas de Monitorização com base no currículo - Maze
                                </li>
                                <li className="nav-item item-navbar">
                                    <Link onClick={()=>logout()} className="nav-link item-navbar" to="/">Sair</Link>
                                </li>
                            </ul>  
                        </div>
                    </nav>
        <form onSubmit={e =>onSubmit(e)} >
            <div className="card border-danger mb-3 my-card2">
                <div className="card-header titulo">Informações para gerar prova:
                    <div className="card-body">
                    <div className="row">
                      <div className="col-sm">
                          <br></br>
                        <div className="form-group row campo">
                                <label>Titulo:</label>
                            <div className="col-sm-10">
                                <input type="text" id="titulo" className="form-control " name="titulo"
                                onChange={e => onInputChange(e)}required/>
                            </div>
                        </div>
                      </div>
                      <div className="col-sm">
                      <br></br>
                        <div className="form-group row campo">
                                <label>Data:</label>
                            <div className="col-sm-7">
                                <input type="date" className="form-control"  id="data_de_realizacao" name="data_de_realizacao"
                                onChange={e => onInputChange(e)}required/>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 ">
                        <br></br>
                        <div className="form-group row campo">
                            <label>Turma:</label>
                                <div className="col-sm-6" >
                                    <input type="text" className="form-control" id="turma" name="turma"
                                            onChange={e => onInputChange(e)}/> 
                                </div>
                            </div>
                        </div>
                            <div>
                              <button type="submit" className="btn botao2" replace>Gerar</button>
                            </div>  
                        </div>
                    </div>
                </div> 
            </form>   
        </div>
   
        )
    }



export default CriarProvas;