import React, {useEffect,useState}  from 'react';
import {Dropdown} from 'react-bootstrap';
import '../index.css';
import { Link, useParams } from 'react-router-dom'
import Imagem from '../images/imagem_pagina_principal.png'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function PaginaPrincipalAdm(){
    const {logout} = useAuth0();
    const {id} = useParams();
    const [utilizadores, setUtilizador] = useState([]);
    const [entidades, setEntidade] = useState([]);
    
      useEffect(()=>{
           loadUtilizador();
           loadEntidade();
      }, []);
      const loadUtilizador = async () =>{
          const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/utilizadors/${id}`, utilizadores);
          console.log(result);
          setUtilizador(result.data)
      }
      const loadEntidade = async () =>{
        const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/entidades/${id}`, entidades);
        console.log(result);
        setEntidade(result.data)
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
                                <Link onClick={()=>logout()}  className="nav-link item-navbar" to="/">Sair</Link>
                            </li>
                        </ul>  
                    </div>
                </nav>
                <img className="imagem-pp" src={Imagem} height="300" width="300" />
                        <div >    
                            <p>{utilizadores.nome}</p>
                            <p>{utilizadores.email}</p>
                        </div>        
                        <div >    
                            <p>{entidades.nome}</p>
                            <p>{entidades.concelho}</p>
                        </div>        
                <Dropdown>
                    <Dropdown.Toggle variant="menu-pp2" id="dropdown-basic" className="menu-pp2">
                        Exemplo
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/gerir-exemplos">Gerir exemplos</Dropdown.Item>
                        <Dropdown.Item href="#/listar-exemplos">Listar exemplos</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                    <Dropdown.Toggle variant="menu-pp" id="dropdown-basic" className="menu-pp">
                        Texto
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/gerir-textos">Gerir Textos</Dropdown.Item>
                        <Dropdown.Item href="#/listar-textos">Listar Textos</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="menu-pp1" id="dropdown-basic" className="menu-pp1">
                        Prova
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/gerir-provas">Gerir Provas</Dropdown.Item>
                        <Dropdown.Item href="#/listar-provas">Listar Provas</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                    <h1 className="titulo-texto">MBCL - Monitorização com Base no Currículo na leitura: 
                        um estudo longitudinal sobre alunos em risco</h1>
                        <br></br>
                        <p className="texto-pp">
                        A monitorização-com-base-no-currículo tem origem na Universidade do Minnesota, 
                        EUA, nos anos 70 pela mão de Stanley Deno e permite uma triagem e uma monitorização do progresso de estudantes de forma fácil, rápida válida. 
                        Desempenha um papel central nos modelos de intervenção multinível e pode ser utilizada para fornecer informações acerca da eficácia do ensino ministrado na sala de aula inclusiva.
                        Da colaboração entre o Centro de Investigação em Educação da Universidade do Minho, do Centro de Investigação em Educação Básica e do Centro de Investigação em Digitalização e Robótica 
                        Inteligente do Instituto Politécnico de Bragança resulta esta plataforma de geração de provas de monitorização-com-base-no-currículo na leitura.
                        </p>
            </div>
        )   
       
    }


export default  PaginaPrincipalAdm;