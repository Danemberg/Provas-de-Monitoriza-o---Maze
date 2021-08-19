import React , {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';

    
const VisualizarTexto = () => {
    const {id} = useParams();
    const [textos, setTexto] = useState([])
    
    useEffect(() => {
        loadTextos();
    }, []);
     
    const loadTextos = async () =>{
        const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/textos/${id}`)
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
                            <li className="nav-item active title-navbar">
                                    Plataforma para geração de Provas de Monitorização com base no currículo - Maze
                            </li>
                            <li className="nav-item item-navbar">
                                <Link className="nav-link item-navbar" to="/">Sair</Link>
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