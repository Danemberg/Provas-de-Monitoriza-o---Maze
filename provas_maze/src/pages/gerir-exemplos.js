import React, {useEffect,useState} from 'react';
import '../index.css';
import { Link } from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';


function GerirExemplos(){
    const [exemplos, setExemplo] = useState([]);
    
      useEffect(()=>{
           loadExemplos();
      }, []);
      const loadExemplos = async () =>{
          const result = await axios.get("http://192.168.1.84/projeto-maze/web/rest/exemplos");
          console.log(result);
          setExemplo(result.data)
      }
      const deleteExemplo = async id =>{
        await axios.delete(`http://192.168.1.84/projeto-maze/web/rest/exemplos/${id}`)
        loadExemplos();
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
                    Gerir Exemplos:
                    </div>
                    <div class="col-sm-6">
                            
                        </div>
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="item-tabela">Titulo
                                        </th>
                                        <th className="item-tabela">Ano</th>
                                        <th>
                                        <Link to="/criar-exemplos" className="btn btn-success botao-tabela ">
                                        <i className="material-icons icone-add">&#xE147;</i> <span>Adicionar</span></Link>     
                                        </th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                exemplos.map((exemplo, index) =>(
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{exemplo.titulo}</td>
                                        <td>{exemplo.ano}</td>
                                        <td>
                                            <Link to="/editar-provas" className="edit">
                                            <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Link>
                                            <Link onClick={()=> deleteExemplo(exemplo.id)} href="#deleteEmployeeModal" className="delete" data-toggle="modal">
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

export default GerirExemplos;