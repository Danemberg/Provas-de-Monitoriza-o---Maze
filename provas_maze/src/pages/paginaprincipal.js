import React from 'react';
import Logo from '../images/LogoMBCL.png';
import '../index.css';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'

class PaginaPrincipal extends React.Component{
    render(){
        return(
        <nav className="navbar navbar-expand-lg my-navbar">     
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <img className="navbar-brand" src={Logo} height="50" width="80" />
                    </li>
                    <li className="nav-item active title-navbar">
                            Plataforma para geração de provas de Monitorização com base no currículo - Maze
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link item-navbar" to="/">Sair</Link>
                    </li>
                </ul>  
            </div>
        </nav>

        )
       
    }
}

export default withRouter (PaginaPrincipal);