import React , {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
    
const VisualizarProva =() =>{
    const {logout} = useAuth0();
    const {id} = useParams();
    const [exemplos, setExemplo] = useState([]);
    const [textos, setTexto] = useState([]);
    const [provas, setProva] = useState([]);

      useEffect(()=>{
           loadProvas();
           loadExemplos();
           loadTextos();
      }, []);

    const loadExemplos = async () =>{
          const result = await axios.get(`http://192.168.134.1/projeto-maze/web/rest/exemplos/${id}`);
          setExemplo(result.data)
    }
    const loadTextos = async () =>{
        const result = await axios.get(`http://192.168.134.1/projeto-maze/web/rest/textos/${id}`);
        setTexto(result.data)
  }
    const loadProvas = async () =>{
        const result = await axios.get(`http://192.168.134.1/projeto-maze/web/rest/provas/${id}`);
        setProva(result.data)
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
                                     <Link to="/listar-provas"><i class="material-icons icone-redirect">subdirectory_arrow_left</i></Link>  
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
            <div className="texto">
                {exemplos.conteudo}
                {textos.conteudo}
            </div>   
        </div>
        )
       
    }


export default VisualizarProva;