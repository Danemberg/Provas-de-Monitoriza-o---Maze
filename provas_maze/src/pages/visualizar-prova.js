import React from 'react';
import '../index.css';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';




class VisualizarProva extends React.Component{
    render(){
        return(
            <div className="container-xl cabecalho-prova">
             <img className="navbar-left" src={Logo} height="30" width="50" />
              Provas de Monitorização com base no Currículo - Maze 
                <div className="table-responsive">
                    <div className="table-wrapper1">
                        <table className="table table-striped table-hover">
                        Nome:____________________________________________________________________Idade:________Data:___________  
                        </table>
                    </div>
                </div>
                <button className="botao-visualizar">PDF</button>  
        </div>
        )
       
    }
}

export default withRouter (VisualizarProva);