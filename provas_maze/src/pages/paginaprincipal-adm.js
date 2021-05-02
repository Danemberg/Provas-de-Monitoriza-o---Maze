import React from 'react';
import '../index.css';
import {withRouter} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Imagem from '../images/imagem_pagina_principal.png'
import Logo from '../images/LogoMBCL.png';

class PaginaPrincipalAdm extends React.Component{
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
                    <Dropdown.Toggle variant="menu-pp" id="dropdown-basic" className="menu-pp2">
                        Opções
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/validar-utilizador">Validar acesso</Dropdown.Item>
                        <Dropdown.Item href="#/gerir-exemplos">Gerir exemplo para provas</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )   
       
    }
}

export default withRouter (PaginaPrincipalAdm);