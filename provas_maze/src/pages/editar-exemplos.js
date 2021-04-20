import React from 'react'
import {withRouter} from 'react-router-dom'


class EditarExemplos extends React.Component{

    render(){
        return(  
        <form>
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
                                    <button type="button" class="botao1">Salvar</button>
                                </div> 
                        </div> 
                    </div> 
                </div> 
            </div>   
        </form>
   
        )
    }
}


export default withRouter (EditarExemplos);