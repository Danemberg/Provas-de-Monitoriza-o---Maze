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
            Validar utilizadores:
            <div className="table-responsive">
                <div className="table-wrapper">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>
                                    <span className="custom-checkbox">
                                        <input type="checkbox" id="selectAll"></input>
                                        <label for="selectAll"></label>
                                    </span>
                                </th>
                                <th>Nome</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                     <span className="custom-checkbox">
                                            <input type="checkbox" id="checkbox1" name="options[]" value="1"></input>
                                            <label for="checkbox1"></label>
                                    </span>
                                </td>
                                <td>Antonio Moreira</td>
                                <td>Docente</td>
                                <td>
                                    <a href="" className="edit">
                                    <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                    <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                    <i className="material-icons" data-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="custom-checkbox">
                                        <input type="checkbox" id="checkbox2" name="options[]" value="1"></input>
                                        <label for="checkbox2"></label>
                                    </span>
                                </td>
                                <td>Joana Carneiro</td>
                                <td>Psicóloga</td>
                                <td>
                                    <a href="" className="edit">
                                    <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                    <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                    <i className="material-icons" data-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
                               </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="custom-checkbox">
                                        <input type="checkbox" id="checkbox3" name="options[]" value="1"></input>
                                        <label for="checkbox3"></label>
                                    </span>
                                </td>
                                <td>João Santos de Oliveira</td>
                                <td>Docente</td>
                                <td>
                                    <a href="" className="edit">
                                    <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                    <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                    <i className="material-icons" data-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="checkbox4" name="options[]" value="1"></input>
                                            <label for="checkbox4"></label>
                                        </span>
                                </td>
                                <td>Ana Maria Carvalho</td>
                                <td>Docente</td>
                                <td>
                                    <a href="" className="edit">
                                    <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                    <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                    <i className="material-icons" data-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="checkbox5" name="options[]" value="1"></input>
                                            <label for="checkbox5"></label>
                                        </span>
                                </td>
                                <td>Rui Alberto Ferreira</td>
                                <td>Docente</td>
                                <td>
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
                            <li className="page-item"><a href="#" className="page-link">Anterior</a></li>
                            <li className="page-item"><a href="#" className="page-link">1</a></li>
                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                            <li className="page-item active"><a href="#" className="page-link">3</a></li>
                            <li className="page-item"><a href="#" className="page-link">4</a></li>
                            <li className="page-item"><a href="#" className="page-link">5</a></li>
                            <li className="page-item"><a href="#" className="page-link">Próximo</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
       
    }
}

export default withRouter (ValidarUtilizador);