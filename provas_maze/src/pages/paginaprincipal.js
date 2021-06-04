import React, {useEffect,useState}  from 'react';
import {Dropdown} from 'react-bootstrap';
import '../index.css';
import { Link } from 'react-router-dom'
import Imagem from '../images/imagem_pagina_principal.png'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';

function PaginaPrincipal(){
    const [utilizadores, setUtilizador] = useState([]);
    const [entidades, setEntidade] = useState([]);
    
      useEffect(()=>{
           loadUtilizador();
           loadEntidade();
      }, []);
      const loadUtilizador = async () =>{
          const result = await axios.get("http://192.168.1.84/projeto-maze/web/rest/utilizador");
          console.log(result);
          setUtilizador(result.data.reverse())
      }
      const loadEntidade = async () =>{
        const result = await axios.get("http://192.168.1.84/projeto-maze/web/rest/entidade");
        console.log(result);
        setEntidade(result.data.reverse())
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
                <img className="imagem-pp" src={Imagem} height="300" width="300" />
                {
                    utilizadores.map((utilizador, index) =>(
                        <div >    
                            <p>{utilizador.nome}</p>
                            <p>{utilizador.email}</p>
                            <p></p>
                            <p></p> 
                        </div>   
                ))}
                  {
                    entidades.map((entidade, index) =>(
                        <div >    
                            <p>{entidade.nome}</p>
                            <p>{entidade.concelho}</p>
                        </div>        
                ))}
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
                            Este projeto tem como finalidade monitorizar a aprendizagem da leitura de uma amostra representativa das crianças que no ano letivo 2017/2018 frequentam o 1º ano de escolaridade no concelho de Bragança.
                            O projeto tem como objetivos:
                            i) conhecer o nível de realização das crianças no final da educação pré-escolar relativamente à identificação do som e do nome das letras;
                            ii) conhecer o nível de realização das mesmas crianças no outono, no inverno e na primavera dos 1.º, 2.º, 3.º e 4.º anos de escolaridade, relativamente à fluência e compreensão da leitura;
                            iii) identificar alunos em risco na leitura;
                            iv) identificar fatores de risco na leitura.
                            Os resultados terão impacto social na medida em que permitirão conhecer trajetórias de aprendizagem da leitura na população e nos alunos em risco.
                        </p>
            </div>
        )   
       
    }


export default PaginaPrincipal;