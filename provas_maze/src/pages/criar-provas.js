import React , {useEffect, useState,alert} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';

const CriarProvas = () => {
    let history = useHistory()
    const {id} = useParams();
    const [provas, setProva] = useState({
      titulo: "",
      data_de_realizacao: "",
      ano: "",
    })
useEffect(() => {
    loadProvas();
}, []);

const loadProvas = async () =>{
    const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/provas`)
    setProva(result.data);
}
   
    const{titulo, data_de_realizacao, ano} = provas;
    const onInputChange = e =>{
     setProva({...provas,[e.target.id]: e.target.value})
    }
    const onSubmit = async e =>{
      e.preventDefault()
      await axios.post("http://192.168.1.84/projeto-maze/web/rest/provas", provas);
      history.push("/")
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
                                    <Link className="nav-link item-navbar" to="/">Sair</Link>
                                </li>
                            </ul>  
                        </div>
                    </nav>
        <form onSubmit={e =>onSubmit(e)} >
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
                                onChange={e => onInputChange(e)}/>
                            </div>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="form-group row campo">
                                <label>Data:</label>
                            <div className="col-sm-5">
                                <input type="text" className="form-control"  id="data_de_realizacao" name="data_de_realizacao"
                                value={provas.data_de_realizacao}
                                onChange={e => onInputChange(e)}/>
                            </div>
                            <div className="col-sm ">
                                    <div className="form-group row campo">
                                        <label>Ano:</label>
                                        <div className="col-sm" id="ano" name="ano">
                                            <select className="form-control"
                                            value={provas.ano}
                                            onChange={e => onInputChange(e)}></select>
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
                                <button type="submit" className="btn botao1">Gerar</button>
                            </div>  
                        </div>
                    </div>
                </div> 
            </form>   
        </div>
   
      
        )
    }



export default CriarProvas;