import React , {useState,alert} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';
   
   
function CriarExemplos(){
    const url = "http://192.168.1.84/projeto-maze/web/rest/exemplos"
    const [exemplos, setExemplo] = useState({
      id:"",
      titulo: "",
      conteudo:"",
      ano:""
    });
   
   function submit(e){
       e.preventDefault();
       axios.post(url,{
          id: parseInt(exemplos.id),
          titulo: exemplos.titulo,
          conteudo: exemplos.conteudo,
          ano: exemplos.ano
       })
       .then(res => {
           console.log(res.exemplos)
       })
   }  
   
   function handle(e){
       const newexemplo = {...exemplos}
       newexemplo[e.target.id] = e.target.value
       setExemplo(newexemplo)
       console.log(newexemplo)
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
                    <div className="card-header titulo">Criar exemplos para provas:
                        <div className="card-body">
                        <div className="col-sm-6">
                        <div className="form-group row campo">
                                <label>Titulo:</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="titulo" name="titulo"
                                value={exemplos.titulo}
                                onChange={(e) => handle(e)}></input>
                            </div>
                        </div>
                      </div>
                            <div className="col">
                                <div className="form-group row campo">
                                        <label>Insira um exemplo:</label>
                                    <div className="col-lg-10">
                                        <textarea className="form-control" rows="10" id="conteudo" name="conteudo"
                                        value={exemplos.conteudo}
                                        onChange={(e) => handle(e)}></textarea>
                                    </div>
                                </div>
                                <br></br>
                                <div className="col-sm-3 ">
                                    <div className="form-group row campo">
                                        <label>Ano:</label>
                                        <div className="col-sm-9">
                                        <input className="form-control" id="ano" name="ano" type="text"
                                             value={exemplos.ano}
                                            onChange={(e) => handle(e)}/>   
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button  type="submit" className="btn botao1">Gerar</button>
                                </div> 
                        </div> 
                    </div> 
                </div> 
            </div>   
        </form>
    </div>
   
        )
    }


export default CriarExemplos;