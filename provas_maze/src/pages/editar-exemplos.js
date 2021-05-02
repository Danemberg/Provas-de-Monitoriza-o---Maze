import React from 'react'
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';

class EditarExemplos extends React.Component{

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
                    <div class="card-header titulo">Editar exemplos para provas:
                        <div class="card-body">
                            <div className="col">
                                <div class="form-group row campo">
                                        <label for="exampleTextarea">Insira um exemplo:</label>
                                    <div class="col-lg-10">
                                        <textarea class="form-control" id="exampleTextarea" rows="12"></textarea>
                                    </div>
                                </div>
                                <br></br>
                                <div className="col-sm-3 ">
                                    <div class="form-group row campo">
                                        <label for="exampleSelect1">Ano:</label>
                                        <div class="col-sm-9">
                                            <select class="form-control" id="exampleSelect1">
                                            <option>1º/2ºano</option>
                                            <option>3º/4ºano</option>
                                            <option>5ºano</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Link to="/gerir-exemplos" type="button" class="btn botao1">Salvar</Link>
                                </div> 
                        </div> 
                    </div> 
                </div> 
            </div>   
        </div>
   
        )
    }
}


export default withRouter (EditarExemplos);