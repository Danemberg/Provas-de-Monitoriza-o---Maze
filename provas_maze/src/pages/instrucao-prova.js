import React from 'react';
import '../index.css';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'




class InstrucaoProva extends React.Component{
    render(){
        return(
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
        )
       
    }
}

export default withRouter (InstrucaoProva);