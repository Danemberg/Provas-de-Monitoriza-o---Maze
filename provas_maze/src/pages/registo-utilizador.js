import React , {useState,alert, useEffect} from 'react'
import '../index.css';
import {Link, useHistory, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';

const RegistoUtilizador = () => {
    let history = useHistory()
    const {id} = useParams();
    const [ent, setEnt] = useState([])
    const [utilizadores, setUtilizador] = useState({
        nome: "",
        email: "",
        senha: "",
        tipo_de_utilizador: "",
        entidade_id: "",
        justificacao_registo: ""
    })
    const [entidades, setEntidade] = useState({
        nome:"",
        concelho: ""
      })
   
    const{nome, email, senha, tipo_de_utilizador, entidade_id, justificacao_registo} = utilizadores;
    const{name, concelho} = entidades;
    const onInputChange = e =>{
     setUtilizador({...utilizadores,[e.target.id]: e.target.value});
    };

    useEffect(() => {
        setEnt([]);
        loadEntidades();
        loadUtilizadores();
    }, []);
    
    const onSubmit = async e =>{
      e.preventDefault()
      await axios.put(`http://192.168.1.84/projeto-maze/web/rest/utilizadors/${id}`, utilizadores);
      history.push("/validar-utilizador")
    };
    
    const loadUtilizadores = async () =>{
        const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/utilizadors/${id}`)
        setUtilizador(result.data);
    }
    const loadEntidades = async () =>{
        const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/entidades`)
        setEntidade(result.data);
        setEnt(result.data);
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
        <form onSubmit={e =>onSubmit(e)} >
            <div className="card border-danger mb-3 my-card">
                <div className="card-header titulo">Registo de utilizador:
                    <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row campo">
                                <label>Nome:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control " id="nome" name="nome"
                                 value={utilizadores.nome}
                                 onChange={e => onInputChange(e)}/>
                            </div>
                        </div>
                            <div className="form-group row campo">
                                    <label>Email:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="email" name="email"
                                    value={utilizadores.email}
                                   onChange={e => onInputChange(e)}/>
                                </div>
                            </div>
                      </div>
                    </div>
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className="form-group row campo">
                                      <label>Entidade:</label>
                                    <div className="col-sm-9">
                                    <select  className="form-control" id="entidade" name="entidade" value={ent.name}
                                            onChange={e => onInputChange(e)}> 
                                               {
                                           ent.map((entidade) =>(
                                            <option>{entidade.nome}</option>
                                               ))}  
                                           </select>
                                    </div>
                                </div>
                            </div>
                                <div className="col-md-6 ">
                                <div className="form-group row campo">
                                        <label>Outros:</label>
                                    <div className="col-sm-9">
                                    <input type="text" className="form-control" id="outros" name="outros"
                                    value={name}
                                   onChange={e => onInputChange(e)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className="form-group row campo">
                                        <label>Concelho:</label>
                                    <div className="col-sm-6">
                                        <select className="form-control" id="concelho" name="concelho"
                                                onChange={e => onInputChange(e)}> 
                                                {
                                                ent.map((entidade) =>(
                                                <option>{entidade.concelho}</option>
                                                ))}  
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="form-group row campo">
                                        <label >Concelho:</label>
                                    <div className="col-sm-6">
                                    <input type="text" className="form-control" id="concelho" name="concelho"
                                    value={concelho}
                                   onChange={e => onInputChange(e)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="form-group row campo">
                                <label>Justificação de registo:</label>
                            <div className="col-md-6">
                                <textarea className="form-control" rows="3" id="justificacao_registo" name="justificacao_registo"
                                value={utilizadores.justificacao_registo}
                                onChange={e => onInputChange(e)}></textarea>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="btn botao">Salvar</button>
                        </div> 
                    </div> 
                </div> 
            </div>  
        </form>  
        </div>
   
      
        )
    }


export default RegistoUtilizador;