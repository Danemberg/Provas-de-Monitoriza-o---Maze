import React , {useState,alert} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';


function CriarProvas(){
    const url = "http://192.168.1.84/projeto-maze/web/rest/provas"
    const [provas, setProva] = useState({
      id:"",
      titulo: "",
      data_de_realizacao: "",
      ano: "",
    });
   
   function submit(e){
       e.preventDefault();
       axios.post(url,{
          id: parseInt(provas.id),
          titulo: provas.titulo,
          data_de_realizacao: provas.data_de_realizacao,
          ano: provas.ano,
       })
       .then(res => {
           console.log(res.provas)
       })
   }  
   
   function handle(e){
       const newprova = {...provas}
       newprova[e.target.id] = e.target.value
       setProva(newprova)
       console.log(newprova)
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
        <form onSubmit={e =>submit(e)}>
            <div className="card border-danger mb-3 my-card">
                <div className="card-header titulo">Informações para gerar prova:
                    <div className="card-body">
                    <div className="row">
                      <div className="col-sm">
                        <div className="form-group row campo">
                                <label>Titulo:</label>
                            <div className="col-sm">
                                <input type="text" id="titulo" className="form-control " name="titulo"
                                value={provas.titulo}
                                onChange={(e) => handle(e)}/>
                            </div>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="form-group row campo">
                                <label>Data:</label>
                            <div className="col-sm-5">
                                <input type="text" className="form-control"  id="data_de_realizacao" name="data_de_realizacao"
                                value={provas.data_de_realizacao}
                                onChange={(e) => handle(e)}/>
                            </div>
                            <div className="col-sm ">
                                    <div className="form-group row campo">
                                        <label>Ano:</label>
                                        <div className="col-sm" id="ano" name="ano">
                                            <select className="form-control"
                                            value={provas.ano}
                                            onChange={(e) => handle(e)}></select>
                                        </div>
                                    </div>
                                </div>
                        </div>
                      </div>
                    </div>
                        <div className="row">
                                <div className="col-lg-6 ">
                                    <div className="form-group row campo">
                                        <label>Exemplo:</label>
                                        <div className="col-sm-9">
                                            <select className="form-control" 
                                            >
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                                <div className="row">
                                    <div className="col-lg-6 ">
                                        <div className="form-group row campo">
                                            <label>Texto 1:</label>
                                            <div className="col-sm-9">
                                                <select className="form-control">
                                                <option>Texto</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="row">
                                <div className="col-lg-6 ">
                                    <div className="form-group row campo">
                                        <label>Texto 2:</label>
                                        <div className="col-sm-9">
                                            <select className="form-control">
                                            <option>Texto</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>       
                            </div>
                            <div className="row">
                                <div className="col-lg-6 ">
                                    <div className="form-group row campo">
                                        <label>Texto 3:</label>
                                        <div className="col-sm-9">
                                            <select className="form-control">
                                            <option>Texto</option>
                                            </select>
                                        </div>
                                    </div>       
                                </div>
                            </div> 
                            <div>
                                <button type="button" className="btn botao1">Gerar</button>
                            </div>  
                        </div>
                    </div>
                </div> 
            </form>   
        </div>
   
      
        )
    }



export default CriarProvas;