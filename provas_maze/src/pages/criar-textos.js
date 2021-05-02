import React from 'react'
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';


class CriarTextos extends React.Component{

    render(){
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
                <div class="card-header titulo">Criar texto:
                    <div class="card-body">
                    <div className="row">
                      <div className="col-sm">
                        <div class="form-group row campo">
                                <label for="exampleInputPassword1">Titulo:</label>
                            <div class="col-sm">
                                <input type="text" class="form-control " id="exampleInputPassword1"></input>
                            </div>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div class="form-group row campo">
                                <label for="exampleInputPassword1">Autor/a:</label>
                            <div class="col-sm">
                                <input type="text" class="form-control " id="exampleInputPassword1"></input>
                            </div>
                        </div>
                      </div>
                    </div>
                        <div className="row-sm">
                            <div class="form-group row campo">
                                    <label for="exampleInputPassword1">Editora do manual:</label>
                                <div class="col-sm-5">
                                    <input type="text" class="form-control " id="exampleInputPassword1"></input>
                                </div>
                            </div>
                            <div class="form-group row campo">
                                        <label for="exampleTextarea">Insira o texto:</label>
                                    <div class="col-lg-10">
                                        <textarea class="form-control" id="exampleTextarea" rows="8"></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div class="form-group row campo">
                                        <label for="exampleSelect1">Ano:</label>
                                        <div class="col-sm-5">
                                            <select class="form-control" id="exampleSelect1">
                                            <option>2.ºano</option>
                                            <option>3.ºano</option>
                                            <option>4.ºano</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/gerir-textos" type="button" class="btn botao1">Criar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
        </div>
        )
    }
}


export default withRouter (CriarTextos);