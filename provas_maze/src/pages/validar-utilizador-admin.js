import React from 'react';
import '../index.css';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'




class ValidarUtilizador extends React.Component{
    render(){
        return(
            <div className="container-xl info-tabela">
                <div className="titulo">
                Validar utilizadores:
                </div>
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                    </th>
                                    <th className="item-tabela">Nome</th>
                                    <th className="item-tabela">Tipo</th>
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
                                    <td>Antonio Moreira</td>
                                    <td>Docente</td>
                                    <td>

                                        <Link type="button" to="/registar-utilizador/:email?" className=" btn botao-visualizar">Visualizar</Link> 
                                        <a href="" className="confirmar">
                                        <i className="material-icons">check</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                        <i className="material-icons">clear</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll"></input>
                                            <label for="selectAll"></label>
                                        </span>
                                    </td>
                                    <td>Joana Carneiro</td>
                                    <td>Psicóloga</td>
                                    <td>
                                        <Link type="button" to="/registar-utilizador/:email?" className=" btn botao-visualizar">Visualizar</Link>
                                        <a href="" className="confirmar">
                                        <i class="material-icons">check</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                        <i class="material-icons">clear</i></a>
                                </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll"></input>
                                            <label for="selectAll"></label>
                                        </span>
                                           
                                    </td>
                                    <td>João Santos de Oliveira</td>
                                    <td>Docente</td>
                                    <td>
                                        <Link type="button" to="/registar-utilizador/:email?" className=" btn botao-visualizar">Visualizar</Link>
                                        <a href="" className="confirmar">
                                        <i class="material-icons">check</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                        <i class="material-icons">clear</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll"></input>
                                            <label for="selectAll"></label>
                                        </span>
                                    </td>
                                    <td>Ana Maria Carvalho</td>
                                    <td>Docente</td>
                                    <td>
                                        <Link type="button" to="/registar-utilizador/:email?" className=" btn botao-visualizar">Visualizar</Link>
                                        <a href="" className="confirmar">
                                        <i class="material-icons">check</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                        <i class="material-icons">clear</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll"></input>
                                            <label for="selectAll"></label>
                                        </span>
                                    </td>
                                    <td>Rui Alberto Ferreira</td>
                                    <td>Docente</td>
                                    <td>
                                        <Link type="button" to="/registar-utilizador/:email?" className=" btn botao-visualizar">Visualizar</Link> 
                                        <a href="" className="confirmar">
                                        <i class="material-icons">check</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                        <i class="material-icons">clear</i></a>
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

export default withRouter (ValidarUtilizador);