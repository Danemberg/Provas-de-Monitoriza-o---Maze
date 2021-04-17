import React from 'react';
import '../index.css';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


class ValidarUtilizador extends React.Component{
    render(){
        return(
            <div className="container-xl">
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
                                    </td>
                                    <td>Antonio Moreira</td>
                                    <td>Docente</td>
                                    <td>
                                        <button className="botao-visualizar">Visualizar</button>
                                        <a href="" className="edit">
                                        <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                        <i className="material-icons" data-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                    <td>Joana Carneiro</td>
                                    <td>Psicóloga</td>
                                    <td>
                                        <button className="botao-visualizar">Visualizar</button>
                                        <a href="" className="edit">
                                        <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                        <i className="material-icons" data-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
                                </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                    <td>João Santos de Oliveira</td>
                                    <td>Docente</td>
                                    <td>
                                        <button className="botao-visualizar">Visualizar</button>
                                        <a href="" className="edit">
                                        <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                        <i className="material-icons" data-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                    <td>Ana Maria Carvalho</td>
                                    <td>Docente</td>
                                    <td>
                                        <button className="botao-visualizar">Visualizar</button>
                                        <a href="" className="edit">
                                        <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                        <i className="material-icons" data-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                    <td>Rui Alberto Ferreira</td>
                                    <td>Docente</td>
                                    <td>
                                        <button className="botao-visualizar">Visualizar</button>
                                        <a href="" className="edit">
                                        <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                        <i className="material-icons" data-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
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