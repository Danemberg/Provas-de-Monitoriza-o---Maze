import React , {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
    
const VisualizarTexto = () => {
    const {logout} = useAuth0();
    const {id} = useParams();
    const [textos, setTexto] = useState([])
    
    useEffect(() => {
        loadTextos();
    }, []);
     
    const loadTextos = async () =>{
        const result = await axios.get(`http://192.168.134.1/projeto-maze/web/rest/textos/${id}`)
        setTexto(result.data);
    }
    return(  
        <div>
            <nav className="navbar navbar-expand-lg my-navbar">     
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <img className="navbar-left" src={Logo} height="50" width="80" />
                            </li>
                            <li>
                            <Link to="/listar-textos"><i class="material-icons icone-redirect">subdirectory_arrow_left</i></Link>  
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
            <div className="row-md">
                <div className="form-group row texto" >
                    <label className="visualizar-texto">Autor:</label>
                    <div className="col-md-3">
                       <label className="visualizar-texto">{textos.autor}</label>
                    </div>
                    <label className="visualizar-texto">Editora do Manual:</label>
                    <div className="col-md-3">
                        <label className="visualizar-texto">{textos.editora_manual}</label>
                    </div>  
                </div>  
            </div> 
            <div className="texto">
                {textos.conteudo}
            </div>                            
        </div>       
                                                     
        )
    }

export default VisualizarTexto;