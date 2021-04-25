import React from 'react';
import '../index.css';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'




class ListarProvas extends React.Component{
    render(){
        return(
            <div className="container-xl info-tabela">
                <div className="titulo">
                Histórico de Provas:
                </div>
                <div class="col-sm-6">
                        
                    </div>
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                    </th>
                                    <th className="item-tabela">Título</th>
                                    <th className="item-tabela">Data</th>
                                    <th className="item-tabela">Turma</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll"></input>
                                            <label for="selectAll"></label>
                                        </span>
                                    </td>
                                    <td>Prova 1</td>
                                    <td>15/03/2021</td>
                                    <td>Turma A</td>
                                    <td>
                                        <Link to="/visualizar-prova" type="button" className=" btn botao-visualizar">Visualizar</Link>  
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll"></input>
                                            <label for="selectAll"></label>
                                        </span>
                                    </td>
                                    <td>Prova 2</td>
                                    <td>20/03/2021</td>
                                    <td>Turma B</td>
                                    <td>
                                        <Link to="/visualizar-prova" type="button" className=" btn botao-visualizar">Visualizar</Link>  
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll"></input>
                                            <label for="selectAll"></label>
                                        </span>
                                           
                                    </td>
                                    <td>Prova 3</td>
                                    <td>22/03/2021</td>
                                    <td>Turma C</td>
                                    <td>
                                        <Link to="/visualizar-prova" type="button" className=" btn botao-visualizar">Visualizar</Link>   
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="clearfix">
                            <ul className="pagination">
                               <a href="#" className="page-link">Anterior</a>
                                <a href="#" className="page-link ">1</a>
                                <a href="#" className="page-link ">2</a>
                                <a href="#" className="page-link active">3</a>
                                <a href="#" className="page-link">4</a>
                                <a href="#" className="page-link">5</a>
                                <a href="#" className="page-link">Próximo</a>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
        )
       
    }
}

export default withRouter (ListarProvas);