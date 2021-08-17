import React, {useEffect,useState} from 'react';
import '../index.css';
import { Link } from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';
import _ from 'lodash';

function GerirExemplos(){
    const pageSize = 5;
    const [exemplos, setExemplo] = useState([]);
    const [paginatedExemplos, setpaginatedExemplos] = useState ([]);
    const [currentPage, setcurrentPage] = useState(1)

      useEffect(()=>{
           loadExemplos();
      }, []);
      const loadExemplos = async () =>{
          const result = await axios.get("http://192.168.1.84/projeto-maze/web/rest/exemplos");
          console.log(result);
          setExemplo(result.data)
          setpaginatedExemplos(_(result.data).slice(0).take(pageSize).value())
      }
      const deleteExemplo = async id =>{
        await axios.delete(`http://192.168.1.84/projeto-maze/web/rest/exemplos/${id}`)
        loadExemplos();
        
      }
      const pageCount = exemplos? Math.ceil(exemplos.length/pageSize) :0;
      if(pageCount ===0) return null;
      const pages = _.range(1,pageCount+1)

      const pagination=(pageNo)=>{
          setcurrentPage(pageNo);
          const startIndex =(pageNo -1) * pageSize;
          const paginatedExemplos = _(exemplos).slice(startIndex).take(pageSize).value();
          setpaginatedExemplos(paginatedExemplos)
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
                    <div className="col-sm-6">
                            
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
                                paginatedExemplos.map((exemplo) =>(
                                    <tr>
                                        <th scope="row"></th>
                                        <td>{exemplo.titulo}</td>
                                        <td>{exemplo.ano}</td>
                                        <td>
                                            <Link to={`editar-exemplos/${exemplo.id}`} className="edit">
                                            <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Link>
                                            <Link onClick={()=>{if(window.confirm('Deseja apagar o exemplo?')) {deleteExemplo(exemplo.id)};}} href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                            <i className="material-icons" data-toggle="tooltip" title="Eliminar">&#xE872;</i></Link>  
                                        </td>
                                        </tr>   
                                    ))}  
                                </tbody>
                            </table>
                            <nav>
                               <ul className="pagination">
                                   {
                                       pages.map((page)=>(
                                        <li  className={
                                            page=== currentPage ? "page-item active " : "page-item" 
                                        }><p className="page-link active"
                                            onClick={()=>pagination(page)}
                                            >{page}</p>
                                        </li>
                                       ))
                                   }
                               </ul>
                           </nav>
                        </div>
                    </div>
            </div>
        </div>
        )
       
    }

export default GerirExemplos;