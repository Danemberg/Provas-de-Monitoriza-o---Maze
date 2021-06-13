import React , {useState,alert, useEffect} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';

const EditarProvas = () => {
    let history = useHistory()
    const {id} = useParams();
    const [provas, setProva] = useState({
        titulo: "",
        data_de_realizacao: "",
        turma: ""
      })
   
    const{titulo, data_de_realizacao, ano} = provas;
    const onInputChange = e =>{
     setProva({...provas,[e.target.id]: e.target.value});
    };

    useEffect(() => {
        loadProvas();
    }, []);
    
    const onSubmit = async e =>{
      e.preventDefault()
      await axios.put(`http://192.168.1.84/projeto-maze/web/rest/provas/${id}`, provas);
      history.push("/gerir-provas")
    };
    
    const loadProvas = async () =>{
        const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/provas/${id}`)
        setProva(result.data);
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
        <form onSubmit={e =>onSubmit(e)}>
            <div className="card border-danger mb-3 my-card">
                <div className="card-header titulo"> Editar informações para gerar prova:
                    <div className="card-body">
                    <div className="row">
                      <div className="col-sm">
                        <div className="form-group row campo">
                                <label>Titulo:</label>
                            <div className="col-sm">
                                <input type="text" className="form-control "  id="titulo" name="titulo"
                                value={titulo}
                                onChange={e => onInputChange(e)}></input>
                            </div>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="form-group row campo">
                                <label>Data:</label>
                            <div className="col-sm-5">
                                <input type="text" className="form-control" id="data_de_realizacao" name="data_de_realizacao"
                                value={data_de_realizacao}
                                onChange={e => onInputChange(e)}></input>
                            </div>
                            <div className="col-sm ">
                                    <div className="form-group row campo">
                                        <label>Turma:</label>
                                        <div className="col-sm">
                                            <select className="form-control" id="turma" name="turma">
                                            <option> {provas.ano}</option>
                                            </select>
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
                                            <select className="form-control">
                                            <option>exemplo</option>
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
                                                <option>texto</option>
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
                                <button type="submit" className="btn botao1">Salvar</button>
                            </div>  
                        </div>   
                    </div>
                </div>  
            </form>  
        </div>
       
        )
    }



export default EditarProvas;