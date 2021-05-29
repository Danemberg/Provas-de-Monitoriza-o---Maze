import React from 'react'
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';

class CriarExemplos extends React.Component{
    state={
        titulo: "",
        autor: "",
        editora_manual: "",
        ano: "",
        conteudo: ""
    };
    async insertTextos() {
     var data = {
       titulo: this.state.titulo,
       autor: this.state.autor,
       editora_manual: this.state.editora_manual,
       ano: this.state.ano,
       conteudo: this.state.conteudo,
     };
     console.log(data);
     var formBody = [];
     for (var property in data) {
       var encodedKey = encodeURIComponent(property);
       var encodedValue = encodeURIComponent(data[property]);
       formBody.push(encodedKey + "=" + encodedValue);
     }
     formBody = formBody.join("&");
     console.log("---------");
     console.log(formBody);
     try {
       let response = await fetch(
         `http://192.168.1.84/projeto-maze/web/rest/texto`,
         {
           method: "POST",
           headers: {
              "Accept": 'application/json',
             "Content-Type": "application/json",
           },
           body: formBody,
         }
       );
       if (response.status >= 200 && response.status < 300) {
         alert("Texto criado com sucesso!!!");
       }
     } catch (errors) {
       alert(errors);
     }
   }
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
                    <div class="card-header titulo">Criar exemplos para provas:
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
                                    <Link to="/gerir-exemplos" type="button" class="btn botao1">Criar</Link>
                                </div> 
                        </div> 
                    </div> 
                </div> 
            </div>   
        </div>
   
        )
    }
}


export default withRouter (CriarExemplos);