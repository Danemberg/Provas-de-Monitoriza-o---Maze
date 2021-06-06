import React, {useEffect,useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';

    const RegistarUtilizador = () => {
        let history = useHistory()
        const {id} = useParams();
        const [utilizadores, setUtilizador] = useState({
          nome: "",
          email: "",
          senha: "",
          tipo_de_utilizador: "",
          entidade_id: "",
        })
        const [entidades, setEntidade] = useState({
            nome:"",
            concelho: ""
          })
        
    useEffect(() => {
        loadEntidades();
    }, []);

    const loadEntidades = async () =>{
        const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/entidades`)
        setEntidade(result.data);
    }
       
        const{nome, email, senha, tipo_de_utilizador, entidade_id} = utilizadores;
        const onInputChange = e =>{
         setUtilizador({...utilizadores,[e.target.email]: e.target.value})
        }
        const onSubmit = async e =>{
          e.preventDefault()
          await axios.post("http://192.168.1.84/projeto-maze/web/rest/utilizadors", utilizadores);
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
            <div className="card border-danger mb-3 my-card">
                <div className="card-header titulo">Registar:
                    <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row campo">
                                <label for="exampleInputPassword1">Nome:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control "  value={nome}
                                 onChange={e => onInputChange(e)}/>
                            </div>
                        </div>
                            <div className="form-group row campo">
                                    <label for="exampleInputEmail1">Email:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  aria-describedby="emailHelp"value={email}
                                 onChange={e => onInputChange(e)}/>
                                </div>
                            </div>
                      </div>
                    </div>
                        <div className="form-group row campo">
                                <label for="exampleInputEmail1">Senha de acesso:</label>
                            <div className="col-sm-3">
                                <input type="password" className="form-control"  aria-describedby="emailHelp"value={senha}
                                 onChange={e => onInputChange(e)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className="form-group row campo">
                                      <label for="exampleSelect1">Entidade:</label>
                                    <div className="col-sm-9">
                                        <select className="form-control">
                                        <option> {entidades.nome}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                                <div className="col-md-6 ">
                                <div className="form-group row campo">
                                        <label for="exampleInputEmail1">Outros:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control"  aria-describedby="emailHelp"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className="form-group row campo">
                                        <label for="exampleInputEmail1">Concelho:</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control-plaintext"  value="Bragança"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="form-group row campo">
                                        <label for="exampleInputEmail1">Concelho:</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" aria-describedby="emailHelp"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row campo">
                                <label for="exampleTextarea">Justificação de registo:</label>
                            <div className="col-md-6">
                                <textarea className="form-control" rows="3"></textarea>
                            </div>
                        </div>
                        <div>
                            <Link type="button" to="/" className=" btn botao">Registar</Link>
                        </div> 
                    </div> 
                </div> 
            </div>    
        </div>
   
      
        )
    }


export default RegistarUtilizador;