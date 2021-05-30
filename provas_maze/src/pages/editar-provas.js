import React , {useState,alert, useEffect} from 'react'
import '../index.css';
import {Link, useHistory, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';

const EditarProvas = () => {
    let history = useHistory()
    const {id} = useParams();
    const [provas, setProva] = useState({
        titulo: "",
        data_de_realizacao: "",
        ano: ""
      })
   
    const{titulo, data_de_realizacao, ano} = provas;
    const onInputChange = e =>{
     setProva({...provas,[e.target.titulo]: e.target.value});
    };

    useEffect(() => {
        loadProvas();
    }, []);
    
    const onSubmit = async e =>{
      e.preventDefault()
      await axios.put(`http://192.168.1.84/projeto-maze/web/rest/prova/${id}`, provas);
      history.push("/gerir-provas")
    };
    
    const loadProvas = async () =>{
        const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/prova/${id}`)
        setProva(result.data);
    }
    return(  
        <div>
            <nav className="navbar navbar-expand-lg my-navbar">     
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <img className="navbar-left" src={Logo} height="50" width="80" />
                                </li>
                                <li className="nav-item active title-navbar">
                                        Plataforma para geração de Provas de Monitorização com base no currículo - Maze
                                </li>
                                <li className="nav-item item-navbar">
                                    <Link className="nav-link item-navbar" to="/">Sair</Link>
                                </li>
                            </ul>  
                        </div>
                    </nav>
            <div class="card border-danger mb-3 my-card">
                <div class="card-header titulo"> Editar informações para gerar prova:
                    <div class="card-body">
                    <div className="row">
                      <div className="col-sm">
                        <div class="form-group row campo">
                                <label for="exampleInputPassword1">Titulo:</label>
                            <div class="col-sm">
                                <input type="text" class="form-control " id="exampleInputPassword1" 
                                value={titulo}
                                onChange={e => onInputChange(e)}></input>
                            </div>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div class="form-group row campo">
                                <label for="exampleInputPassword1">Data:</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control " id="exampleInputPassword1"
                                value={data_de_realizacao}
                                onChange={e => onInputChange(e)}></input>
                            </div>
                            <div className="col-sm ">
                                    <div class="form-group row campo">
                                        <label for="exampleSelect1">Ano:</label>
                                        <div class="col-sm">
                                            <select class="form-control" id="exampleSelect1">
                                            <option value={ano}
                                            onChange={e => onInputChange(e)}></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                        </div>
                      </div>
                    </div>
                        <div className="row">
                                <div className="col-lg-6 ">
                                    <div class="form-group row campo">
                                        <label for="exampleSelect1">Exemplo:</label>
                                        <div class="col-sm-9">
                                            <select class="form-control" id="exampleSelect1">
                                            <option>Exemplo</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                                <div className="row">
                                    <div className="col-lg-6 ">
                                        <div class="form-group row campo">
                                            <label for="exampleSelect1">Texto 1:</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" id="exampleSelect1">
                                                <option>Texto</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="row">
                                <div className="col-lg-6 ">
                                    <div class="form-group row campo">
                                        <label for="exampleSelect1">Texto 2:</label>
                                        <div class="col-sm-9">
                                            <select class="form-control" id="exampleSelect1">
                                            <option>Texto</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>       
                            </div>
                            <div className="row">
                                <div className="col-lg-6 ">
                                    <div class="form-group row campo">
                                        <label for="exampleSelect1">Texto 3:</label>
                                        <div class="col-sm-9">
                                            <select class="form-control" id="exampleSelect1">
                                            <option>Texto</option>
                                            </select>
                                        </div>
                                    </div>       
                                </div>
                            </div> 
                            <div>
                                <Link to="/gerir-provas" type="button" class="btn botao1">Salvar</Link>
                            </div>  
                        </div>
                    </div>
                </div>    
        </div>
       
        )
    }



export default EditarProvas;