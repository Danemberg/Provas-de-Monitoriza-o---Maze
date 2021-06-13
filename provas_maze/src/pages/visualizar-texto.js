import React , {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';

    
const VisualizarTexto = () => {
    const {id} = useParams();
    const [textos, setTexto] = useState({
      conteudo:""
    })
    const{conteudo} = textos;

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
        
            <ul className="texto">
                <p>{conteudo}</p>
            </ul>                                 
        </div>       
                                                     
        )
    }

export default VisualizarTexto;