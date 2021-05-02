import React from 'react';
import '../index.css';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';



class InstrucaoProva extends React.Component{
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
                <div className="container-xl info-tabela">
                    <div className="titulo">
                    Instruções para criar uma prova:
                    </div>
                    <div class="col-sm-6">
                            
                        </div>
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <table className="table table-striped table-hover">
                            . Escolher exemplo a ser utilizado para a prova
                            <br/>
                            . Escolher os três textos para a prova
                            <br/>
                            . Inserir os distratores nos textos nos espaços vazios
                            <br/>
                            . Texto não pode ter parágrafos     
                            </table>
                        </div>
                    </div>
            </div>
        </div>
        )
       
    }
}

export default withRouter (InstrucaoProva);