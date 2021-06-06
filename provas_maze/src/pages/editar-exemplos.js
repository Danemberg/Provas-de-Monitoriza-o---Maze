import React , {useState,alert, useEffect} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import '../index.css';
import axios from 'axios';

   const EditarExemplos = () => {
    let history = useHistory()
    const {id} = useParams();
    const [exemplos, setExemplo] = useState({
      titulo: "",
      conteudo: "",
      ano: ""
    })
   
    const{titulo, conteudo, ano} = exemplos;
    const onInputChange = e =>{
     setExemplo({...exemplos,[e.target.titulo]: e.target.value})
    }
    useEffect(() => {
        loadExemplos();
    }, []);

    const onSubmit = async e =>{
      e.preventDefault()
      await axios.put(`http://192.168.1.84/projeto-maze/web/rest/exemplos/${id}`, exemplos);
      history.push("/gerir-exemplos")
    };
    const loadExemplos = async () =>{
        const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/exemplos/${id}`)
        setExemplo(result.data);
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
            <div className="card border-danger mb-3 my-card">
                    <div className="card-header titulo">Editar exemplos para provas:
                        <div className="card-body">
                        <div className="col-sm-6">
                        <div className="form-group row campo">
                                <label for="exampleInputPassword1">Titulo:</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control " id="exampleInputPassword1" 
                                value={titulo}
                                onChange={e => onInputChange(e)}></input>
                            </div>
                        </div>
                      </div>
                            <div className="col">
                                <div className="form-group row campo">
                                        <label for="exampleTextarea">Insira um exemplo:</label>
                                    <div className="col-lg-10">
                                        <textarea className="form-control" id="exampleTextarea" rows="10"
                                        value={conteudo}
                                        onChange={e => onInputChange(e)}></textarea>
                                    </div>
                                </div>
                                <br></br>
                                <div className="col-sm-3 ">
                                    <div className="form-group row campo">
                                        <label for="exampleSelect1">Ano:</label>
                                        <div className="col-sm-9">
                                        <select className="form-control" id="exampleSelect1">
                                            <option  value={ano}
                                            onChange={e => onInputChange(e)}></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Link to="/gerir-exemplos" type="button" className="btn botao1">Salvar</Link>
                                </div> 
                        </div> 
                    </div> 
                </div> 
            </div>   
        </div>
   
        )
    }



export default EditarExemplos;