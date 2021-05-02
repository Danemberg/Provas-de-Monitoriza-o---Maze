import React from 'react';
import {Dropdown} from 'react-bootstrap';
import '../index.css';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Imagem from '../images/imagem_pagina_principal.png'
import Logo from '../images/LogoMBCL.png';

class PaginaPrincipal extends React.Component{
    render(){
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
                <br></br>
                Rodrigo Danemberg
                <br></br>
                rdanember@hotmail.com
                <br></br>
                Instituto Politécnico de Bragança
                <br></br>
                Bragança
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
                
            </div>
        )   
       
    }
}

export default withRouter (PaginaPrincipal);