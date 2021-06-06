import React, {useEffect,useState} from 'react';
import '../index.css';
import {Link, useHistory, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';


const VisualizarExemplo = () =>{
    let history = useHistory()
    const {id} = useParams();
    const [exemplos, setExemplo] = useState({
        conteudo:""

    });
    
    const{conteudo} = exemplos;
    const onInputChange = e =>{
     setExemplo({...exemplos,[e.target.conteudo]: e.target.value});
    };

      useEffect(()=>{
           loadExemplos();
      }, []);
      const loadExemplos = async () =>{
          const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/exemplos/${id}`);
          setExemplo(result.data)
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


export default VisualizarExemplo;