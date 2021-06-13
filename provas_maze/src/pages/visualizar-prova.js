import React , {useState, useEffect} from 'react'
import '../index.css';
import {Link, useHistory, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';

    
const VisualizarProva =() =>{
    const {id} = useParams();
    const [exemplos, setExemplo] = useState({
        conteudo:""

    });
    const{conteudo} = exemplos;

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
                <div className="container-xl cabecalho-prova">
                
                    <div className="table-responsive">
                    <img className="navbar-left" src={Logo} height="30" width="50" />
                        Provas de Monitorização com base no Currículo - Maze 
                        <div className="table-wrapper1">
                            <table className="table table-striped table-hover">
                            Código:_____________Nome:________________________________________________________Idade:________Data:___________  
                            </table>
                        </div>
                    </div>
                </div>
            <ul className="texto">
                <p>{conteudo}</p>
            </ul>   
        </div>
        )
       
    }


export default VisualizarProva;