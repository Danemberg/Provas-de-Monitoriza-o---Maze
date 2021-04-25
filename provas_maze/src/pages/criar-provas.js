import React from 'react'
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'



class CriarProvas extends React.Component{

    render(){
        return(  
        <form>
            <div class="card border-danger mb-3 my-card">
                <div class="card-header titulo">Informações para gerar prova:
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
                                <label for="exampleInputPassword1">Data:</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control " id="exampleInputPassword1"></input>
                            </div>
                            <div className="col-sm ">
                                    <div class="form-group row campo">
                                        <label for="exampleSelect1">Ano:</label>
                                        <div class="col-sm">
                                            <select class="form-control" id="exampleSelect1">
                                            <option>1º/2ºano</option>
                                            <option>3º/4ºano</option>
                                            <option>5ºano</option>
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
                                            <option>Exemplo</option>
                                            <option>Exemplo</option>
                                            <option>Exemplo</option>
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
                                                <option>Texto</option>
                                                <option>Texto</option>
                                                <option>Texto</option>
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
                                            <option>Texto</option>
                                            <option>Texto</option>
                                            <option>Texto</option>
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
                                            <option>Texto</option>
                                            <option>Texto</option>
                                            <option>Texto</option>
                                            <option>Texto</option>
                                            </select>
                                        </div>
                                    </div>       
                                </div>
                            </div> 
                            <div>
                                <Link to="/gerir-provas" type="button" class="btn botao1">Gerar</Link>
                            </div>  
                        </div>
                    </div>
                </div>    
        </form>
   
      
        )
    }
}


export default withRouter (CriarProvas);