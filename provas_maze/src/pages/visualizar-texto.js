import React from 'react';
import '../index.css';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';




class VisualizarTexto extends React.Component{
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
            </div>
        )
       
    }
}

export default withRouter (VisualizarTexto);