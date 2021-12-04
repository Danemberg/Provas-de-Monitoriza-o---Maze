import React, {useEffect,useState, useCallback} from 'react';
import {Link, useHistory, useParams, withRouter} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';


    export const RegistarUtilizador = withRouter(({history}) =>{
       
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
        <form>
            <div className="card border-danger mb-3 my-card">
                <div className="card-header titulo">Registar:
                    <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row campo">
                                    <label>Email:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="email" name="email" 
                                 required/>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group row campo">
                                    <label>Senha de acesso:</label>
                                <div className="col-sm-6">
                                    <input type="password" className="form-control" id="senha" name="senha" 
                                    required/>
                                </div>
                            </div>
                        </div>
                           
                       </div>
                        <div className="form-group row campo">
                            <label>Autorizo o tratamento dos dados</label>
                            <div className="form-group row campo">
                                <input className="form-control" type="checkbox" required/>
                            </div>    
                        </div>
                        <div>
                            <button type="submit" className=" btn botao" replace>Registar</button>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </form>   
        </div>
   
      
        );
    });


    export default withRouter (RegistarUtilizador);