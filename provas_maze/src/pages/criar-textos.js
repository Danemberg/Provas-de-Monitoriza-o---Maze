import React , {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';


const CriarTextos = () => {
    const {logout} = useAuth0();
    let history = useHistory()
    const [textos, setTexto] = useState({
      titulo: "",
      autor: "",
      editora_manual: "",
      ano: "",
      conteudo: ""
    })
useEffect(() => {
    loadTextos();
}, []);

const loadTextos = async () =>{
    const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/textos`)
    console.log(result);
    setTexto(result.data);
}
   
    const{titulo, autor, editora_manual, ano, conteudo} = textos;
    const onInputChange = e =>{
    setTexto({...textos,[e.target.id]: e.target.value})
    }
    const onSubmit = async e =>{
      e.preventDefault()
      try{
        await axios.post("http://192.168.1.84/projeto-maze/web/rest/textos", textos);
        alert("Texto criado com sucesso!!!")
        history.push("/gerir-textos")
      }catch(error){
        alert("Preencha todos os campos!")
    }
        
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
                                  <Button onClick={()=>logout()} className=" btn botao" to="/">Sair</Button>
                              </li>
                          </ul>  
                      </div>
                  </nav>
                  <form onSubmit={e =>onSubmit(e)} >
              <div className="card border-danger mb-3 my-card">
                  <div className="card-header titulo">Criar texto:
                      <div className="card-body">
                      <div className="row">
                        <div className="col-sm">
                          <div className="form-group row campo">
                                  <label>Titulo:</label>
                              <div className="col-sm">
                                  <input type="text" id="titulo" className="form-control " name="titulo"
                                   onChange={e => onInputChange(e)} required/>
                              </div>
                          </div>
                        </div>
                        <div className="col-sm">
                          <div className="form-group row campo">
                                  <label>Autor/a:</label>
                              <div className="col-sm">
                                  <input type="text" id="autor" className="form-control " name="autor"
                                onChange={e => onInputChange(e)} required/>
                              </div>
                          </div>
                        </div>
                      </div>
                          <div className="row-sm">
                              <div className="form-group row campo">
                                      <label>Editora do manual:</label>
                                  <div className="col-sm-5">
                                      <input type="text" id="editora_manual" className="form-control " name="editora_manual"
                                      onChange={e => onInputChange(e)} required/>
                                  </div>
                              </div>
                              <div className="form-group row campo">
                                          <label>Insira o texto:</label>
                                      <div className="col-lg-10">
                                          <textarea id="conteudo" className="form-control" name="conteudo" rows="8"  
                                         onChange={e => onInputChange(e)} required/>
                                      </div>
                                  </div>
                                  <div className="col-sm-6">
                                      <div className="form-group row campo">
                                          <label >Ano:</label>
                                          <div className="col-sm-5">
                                              <select  className="form-control" id="ano" name="ano"
                                               onChange={e => onInputChange(e)} required>  
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>         
                                               </select>
                                          </div>  
                                      </div>
                                  </div>
                                  <button type="submit" className="btn botao1" replace>Gerar</button>
                              </div>
                          </div>
                      </div>
                  </div> 
                  </form>   
          </div>
          )
      }
  
  
  export default CriarTextos;