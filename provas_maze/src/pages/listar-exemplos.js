import React, {useEffect,useState} from 'react';
import '../index.css';
import { Link } from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';
import _ from 'lodash';
import { useAuth0 } from '@auth0/auth0-react';

function ListarExemplos(){
    const {logout} = useAuth0();
    const pageSize = 5;
    const [exemplos, setExemplo] = useState([]);
    const [paginatedExemplos, setpaginatedExemplos] = useState ([]);
    const [currentPage, setcurrentPage] = useState(1)
    const [input, setInput] = useState('')

      useEffect(()=>{
           loadExemplos();
      }, []);
      useEffect(()=>{
        setpaginatedExemplos([])
        exemplos.filter(val=>{
            if(val.titulo.toLowerCase().includes(input.toLocaleLowerCase()))
            {
                setpaginatedExemplos(paginatedExemplos=>[...paginatedExemplos,val])
            }
        })
      
 }, [input]);

      const loadExemplos = async () =>{
          const result = await axios.get("http://192.168.134.1/projeto-maze/web/rest/exemplos");
          console.log(result);
          setExemplo(result.data)
          setpaginatedExemplos(_(result.data).slice(0).take(pageSize).value())
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
                        <li>
                            <Link to="/paginaprincipal-adm"><i class="material-icons icone-redirect">subdirectory_arrow_left</i></Link>  
                            </li>
                        <li className="nav-item active title-navbar">
                                Plataforma para geração de Provas de Monitorização com base no currículo - Maze
                        </li>
                        <li className="nav-item item-navbar">
                            <Link onClick={()=>logout()} className="nav-link item-navbar" to="/">Sair</Link>
                        </li>
                    </ul>  
                </div>
            </nav>
        
            <div className="container-xl info-tabela">
                <div className="titulo">
                Histórico de Exemplos:
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
                                        <input onChange={e=>setInput(e.target.value)} type="text" placeholder="Pesquisar por título" 
                                        className="item-tabela pesquisa"></input>
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
                                    <td><Link to={`visualizar-exemplo/${exemplo.id}`} type="button" className=" btn botao-visualizar">Visualizar</Link></td> 
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

export default ListarExemplos;