import React from 'react';
import '../index.css';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'




class GerirProvas extends React.Component{
    render(){
        return(
            <div className="container-xl info-tabela">
                <div className="titulo">
                Gerir Provas:
                <Link to="/instrucao-prova" className="edit">
                <i href="/instrucao-prova" class="material-icons info-icone">info</i></Link>
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
                                    <th className="item-tabela">Ano</th>
                                    <th>
                                    <Link to="/criar-exemplos" className="btn btn-success botao-tabela ">
                                    <i class="material-icons icone-add">&#xE147;</i> <span>Adicionar</span></Link>    
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        
                                    </td>
                                    <td>Prova 1</td>
                                    <td>15/03/2021</td>
                                    <td>1ºano/2ºano</td>
                                    <td>
                                        <Link to="/editar-provas" className="edit">
                                        <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Link>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                        <i className="material-icons" data-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                     
                                    </td>
                                    <td>Prova 2</td>
                                    <td>20/03/2021</td>
                                    <td>3ºano/4ºano</td>
                                    <td>
                                        <Link to="/editar-provas" className="edit">
                                        <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Link>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                        <i className="material-icons" data-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
                                </td>
                                </tr>
                                <tr>
                                    <td>
                                     
                                    </td>
                                    <td>Prova 3</td>
                                    <td>22/03/2021</td>
                                    <td>5ºano</td>
                                    <td>
                                        <Link to="/editar-provas" className="edit">
                                        <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Link>
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

export default withRouter (GerirProvas);