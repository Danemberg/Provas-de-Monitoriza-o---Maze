import React, {useEffect,useState} from 'react';
import '../index.css';
import { Link } from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';



function ListarProvas(){
    const [provas, setProva] = useState([]);
    
      useEffect(()=>{
           loadProvas();
      }, []);
      const loadProvas = async () =>{
          const result = await axios.get("http://192.168.1.84/projeto-maze/web/rest/prova");
          console.log(result);
          setProva(result.data)
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
                    Histórico de Provas:
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
                                        <th className="item-tabela">Data</th>
                                        <th className="item-tabela">Turma</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                provas.map((prova, index) =>(
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{prova.titulo}</td>
                                        <td>{prova.data_de_realizacao}</td>
                                        <td>{prova.ano}</td>
                                        <td><Link to="/visualizar-texto" type="button" className=" btn botao-visualizar">Visualizar</Link></td> 
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


export default ListarProvas