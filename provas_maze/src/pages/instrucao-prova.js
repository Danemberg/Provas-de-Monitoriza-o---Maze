import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import { useAuth0 } from '@auth0/auth0-react';

function InstrucaoProva(){
    const {logout} = useAuth0();
        return(
            <div>
                <nav className="navbar navbar-expand-lg my-navbar">     
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <img className="navbar-left" src={Logo} height="50" width="80" />
                            </li>
                            <li>
                            <Link to="/gerir-provas"><i class="material-icons icone-redirect">subdirectory_arrow_left</i></Link>  
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
                <div className="container-xl info-tabela">
                    <div className="titulo">
                    Instruções para criar uma prova:
                    </div>
                    <div className="col-sm-6">
                            
                        </div>
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <ul className="table table-striped table-hover">
                            . Inserir informações básicas (título, data e turma)
                            <br/>
                            . Escolher exemplo a ser utilizado para a prova
                            <br/>
                            . Escolher os três textos para a prova
                            <br/>
                            . Inserir os distratores nos textos nos espaços vazios   
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
        )
       
    }

export default InstrucaoProva;