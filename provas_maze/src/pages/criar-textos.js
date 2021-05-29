import React , {useState,alert} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';

const CriarTextos = () => {
  let history = useHistory()
  const [textos, setTexto] = useState({
    titulo: "",
    autor: "",
    editora_manual: "",
    ano: "",
    conteudo:""
  })
 
  const{titulo, autor, editora_manual, ano, conteudo} = textos;
  const onInputChange = e =>{
   setTexto({...textos,[e.target.titulo]: e.target.value})
  }
  const onSubmit = async e =>{
    e.preventDefault()
    await axios.post("http://192.168.1.84/projeto-maze/web/rest/texto", textos);
    history.push("/gerir-textos")
  };
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
            <div className="card border-danger mb-3 my-card">
                <div className="card-header titulo">Criar texto:
                    <div className="card-body">
                    <div className="row">
                      <div className="col-sm">
                        <div className="form-group row campo">
                                <label for="exampleInputPassword1">Titulo:</label>
                            <div className="col-sm">
                                <input type="text" className="form-control " name="titulo"
                                 value={titulo}
                                 onChange={e => onInputChange(e)}/>
                            </div>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div onSubmit={e =>onSubmit(e)} className="form-group row campo">
                                <label for="exampleInputPassword1">Autor/a:</label>
                            <div className="col-sm">
                                <input type="text" className="form-control " name="autor"
                              value={autor}
                              onChange={e => onInputChange(e)}/>
                            </div>
                        </div>
                      </div>
                    </div>
                        <div className="row-sm">
                            <div className="form-group row campo">
                                    <label for="exampleInputPassword1">Editora do manual:</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control " name="editora"
                                    value={editora_manual}
                                    onChange={e => onInputChange(e)}/>
                                </div>
                            </div>
                            <div className="form-group row campo">
                                        <label for="exampleTextarea">Insira o texto:</label>
                                    <div className="col-lg-10">
                                        <textarea className="form-control" name="conteudo" rows="8"  
                                       value={conteudo}
                                       onChange={e => onInputChange(e)}/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group row campo">
                                        <label for="exampleSelect1">Ano:</label>
                                        <div className="col-sm-5">
                                            <select className="form-control" name="ano">
                                            <option value={ano}
                                            onChange={e => onInputChange(e)}></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/gerir-textos" type="button" className="btn botao1">Gerar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
        </div>
        )
    }


export default CriarTextos;