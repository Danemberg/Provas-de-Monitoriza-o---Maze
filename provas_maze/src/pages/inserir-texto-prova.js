import React , {useEffect, useState,alert} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';


const InserirTextoProva= () => {
    const {logout} = useAuth0();
    let history = useHistory()
    const [provatexto, setProvaTexto] = useState({
      texto_id: "",
      prova_id: ""
    })
useEffect(() => {
    loadProvaTexto();
}, []);

const loadProvaTexto = async () =>{
    const result = await axios.get(`http://192.168.134.1/projeto-maze/web/rest/provatextos`)
    console.log(result);
    setProvaTexto(result.data);
}
    const{texto_id, prova_id} = provatexto;
    const onInputChange = e =>{
     setProvaTexto({...provatexto,[e.target.id]: e.target.value})
    }
    const onSubmit = async e =>{
      e.preventDefault()
        await axios.post("http://192.168.134.1/projeto-maze/web/rest/provatextos", provatexto);
        history.push("/gerar-provas")
    };
        return(  
        <div>
            <nav className="navbar navbar-expand-lg my-navbar">     
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <img className="navbar-left" src={Logo} height="50" width="80" />
                                </li>
                                <li>
                            <Link to="/gerir-provas"><i class="material-icons icone-redirect">subdirectory_arrow_left</i></Link>  
                            </li>
                                <li className="nav-item active title-navbar">
                                        Plataforma para geração de Provas de Monitorização com base no currículo - Maze
                                </li>
                                <li className="nav-item item-navbar">
                                    <Link onClick={()=>logout()} className="nav-link item-navbar" to="/">Sair</Link>
                                </li>
                            </ul>  
                        </div>
                    </nav>
        <form onSubmit={e =>onSubmit(e)} >
            <div className="card border-danger mb-3 my-card2">
                <div className="card-header titulo">Informações para gerar prova:
                    <div className="card-body">
                    <div className="row">
                      <div className="col-sm">
                          <br></br>
                        <div className="form-group row campo">
                                <label>Texto:</label>
                            <div className="col-sm-10">
                                <input type="text" id="texto_id" className="form-control " name="texto"
                                onChange={e => onInputChange(e)}required/>
                            </div>
                        </div>
                      </div>
                      <div className="col-sm">
                      <br></br>
                        <div className="form-group row campo">
                                <label>Prova:</label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control"  id="prova_id" name="prova"
                                onChange={e => onInputChange(e)}required/>
                            </div>
                        </div>
                      </div>
                    </div>
                            <div>
                              <button type="submit" className="btn botao2" replace>Gerar</button>
                            </div>  
                        </div>
                    </div>
                </div> 
            </form>   
        </div>
   
        )
    }



export default InserirTextoProva;