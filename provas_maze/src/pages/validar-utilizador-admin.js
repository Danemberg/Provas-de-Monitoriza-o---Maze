import React, {useEffect,useState} from 'react';
import '../index.css';
import { Link } from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';



function ValidarUtilizador(){
    const [utilizadores, setUtilizador] = useState([]);
 
      useEffect(()=>{
           loadUtilizador();
      }, []);
      const loadUtilizador = async () =>{
          const result = await axios.get("http://localhost/projeto-maze/web/rest/utilizadors");
          console.log(result);
          setUtilizador(result.data.reverse())
      }
      const deleteUtilizador = async id =>{
        await axios.delete(`http://192.168.1.84/projeto-maze/web/rest/utilizadors/${id}`)
        loadUtilizador();
      }
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
                                        <th className="item-tabela">Email</th>
                                        <th className="item-tabela">Tipo de utilizador</th>
                                        <th className="item-tabela"></th> 
                                        <th className="item-tabela"></th> 
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                utilizadores.map((utilizador, index) =>(
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{utilizador.nome}</td>
                                        <td>{utilizador.email}</td>
                                        <td>{utilizador.tipo_de_utilizador}</td>
                                        <td>
                                            <Link type="button" to={`registo-utilizador/${utilizador.id}`} className=" btn botao-visualizar">Visualizar</Link> </td>
                                        <td>
                                               <Link onClick={()=> deleteUtilizador(utilizador.id)} href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                            <i className="material-icons" data-toggle="tooltip" title="Eliminar">&#xE872;</i></Link>
                                        </td>
                                        </tr>  
                                                ))}  
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
        </div>
        )
       
    }


export default ValidarUtilizador;