import React from 'react';
import '../index.css';
import {withRouter} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Imagem from '../images/imagem_pagina_principal.png'

class PaginaPrincipalAdm extends React.Component{
    render(){
        return(
            <div>
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