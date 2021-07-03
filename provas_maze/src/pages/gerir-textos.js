import React, {useEffect,useState, alert} from 'react';
import '../index.css';
import { Link } from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';


function GerirTextos(){
    const [textos, setTexto] = useState([]);
    
      useEffect(()=>{
           loadTextos();
      }, []);
      const loadTextos = async () =>{
          const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/textos`);
          console.log(result);
          setTexto(result.data)
      }
      const deleteTexto = async id =>{
        await axios.delete(`http://192.168.1.84/projeto-maze/web/rest/textos/${id}`)
        loadTextos();
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
                    Gerir Textos:
                    </div>
                    <div className="col-sm-6">
                            
                        </div>
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>
                                        </th>
                                        <th className="item-tabela">Título</th>
                                        <th className="item-tabela">Autor/a</th>
                                        <th className="item-tabela">Editora do manual</th>
                                        <th className="item-tabela">Ano</th>
                                        <th>
                                        <Link to="/criar-textos" className="btn btn-success botao-tabela ">
                                        <i className="material-icons icone-add">&#xE147;</i> <span>Adicionar</span></Link>    
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                textos.map((texto, index) =>(
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{texto.titulo}</td>
                                        <td>{texto.autor}</td>
                                        <td>{texto.editora_manual}</td>
                                        <td>{texto.ano}</td> 
                                        <td>
                                            <Link to={`editar-textos/${texto.id}`} className="edit">
                                            <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Link>
                                            <Link onClick={()=> {if(window.confirm('Deseja apagar o texto?')) {deleteTexto(texto.id)};}} href="#deleteEmployeeModal" className="delete" data-toggle="modal">
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


export default GerirTextos;