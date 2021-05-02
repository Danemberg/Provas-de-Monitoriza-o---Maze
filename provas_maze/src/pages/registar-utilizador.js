import React from 'react'
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';


class RegistoUtilizador extends React.Component{

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
                <div class="card-header titulo">Registar:
                    <div class="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div class="form-group row campo">
                                <label for="exampleInputPassword1">Nome:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control " id="exampleInputPassword1"></input>
                            </div>
                        </div>
                            <div class="form-group row campo">
                                    <label for="exampleInputEmail1">Email:</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                </div>
                            </div>
                      </div>
                    </div>
                        <div class="form-group row campo">
                                <label for="exampleInputEmail1">Senha de acesso:</label>
                            <div class="col-sm-3">
                                <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div class="form-group row campo">
                                      <label for="exampleSelect1">Entidade:</label>
                                    <div class="col-sm-9">
                                        <select class="form-control" id="exampleSelect1">
                                        <option>Instituto Politécnico de Bragança</option>
                                        <option>Universidade do Minho</option>
                                        <option>Universidade do Porto</option>
                                        <option>Universidade de Lisboa</option>
                                        <option>Universidade de Coimbra</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                                <div className="col-md-6 ">
                                <div class="form-group row campo">
                                        <label for="exampleInputEmail1">Outros:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div class="form-group row campo">
                                        <label for="exampleInputEmail1">Concelho:</label>
                                    <div class="col-sm-6">
                                        <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value="Bragança"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div class="form-group row campo">
                                        <label for="exampleInputEmail1">Concelho:</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row campo">
                                <label for="exampleTextarea">Justificação de registo:</label>
                            <div class="col-md-6">
                                <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                            </div>
                        </div>
                        <div>
                            <Link type="button" to="/" class=" btn botao">Registar</Link>
                        </div> 
                    </div> 
                </div> 
            </div>    
        </div>
   
      
        )
    }
}


export default withRouter (RegistoUtilizador);