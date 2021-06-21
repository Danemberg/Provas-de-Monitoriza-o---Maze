import React , {useEffect, useState,alert} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';

const CriarProvas = () => {
    let history = useHistory()
    const {id} = useParams();
    const [ex, setEx] = useState([])
    const [text,setText] = useState([])
    const[prov,setProv] = useState([])
    const[exemplos, setExemplo] = useState({
        titulo: "",
        conteudo: "",
        ano: "",
    })
    const[textos, setTexto] = useState({
        titulo: "",
        autor: "",
        editora_manual: "",
        ano: "",
        conteudo: ""
    })
    const [provas, setProva] = useState({
      titulo: "",
      data_de_realizacao: "",
      turma: ""
    })
useEffect(() => {
    setEx([]);
    setText([]);
    setProv([]);
    loadExemplos();
    loadTextos();
    loadProvas();
}, []);

const loadExemplos = async () =>{
    const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/exemplos`)
    console.log(result);
    setExemplo(result.data);
    setEx(result.data);
    
}
const loadTextos = async ()=>{
    const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/textos`)
    console.log(result);
    setTexto(result.data);
    setText(result.data);
} 

const loadProvas = async () =>{
    const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/provas`)
    console.log(result);
    setProva(result.data);
    setProv(result.data);
}
 
    const{titulo, data_de_realizacao, ano} = provas;
    const onInputChange = e =>{
     setExemplo({...exemplos,[e.target.id]: e.target.value})
     setTexto({...textos,[e.target.id]: e.target.value})
     setProva({...provas,[e.target.id]: e.target.value})
    }
    const onSubmit = async e =>{
      e.preventDefault()
      try{
        await axios.post("http://192.168.1.84/projeto-maze/web/rest/provas", provas);
        alert("Prova criada com sucesso!!!")
        history.push("/gerir-provas")
      }catch(error){
        alert("Preencha todos os campos!")
    }
    const gerarProva = () =>{
 
        

    }
          
    };
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
        <form onSubmit={e =>onSubmit(e)} >
            <div className="card border-danger mb-3 my-card">
                <div className="card-header titulo">Informações para gerar prova:
                    <div className="card-body">
                    <div className="row">
                      <div className="col-sm">
                        <div className="form-group row campo">
                                <label>Titulo:</label>
                            <div className="col-sm-10">
                                <input type="text" id="titulo.prov" className="form-control " name="titulo.prov"
                                onChange={e => onInputChange(e)}/>
                            </div>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="form-group row campo">
                                <label>Data:</label>
                            <div className="col-sm-7">
                                <input type="date" className="form-control"  id="data_de_realizacao" name="data_de_realizacao"
                                value={provas.data_de_realizacao}
                                onChange={e => onInputChange(e)}/>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-6 ">
                        <div className="form-group row campo">
                            <label>Turma:</label>
                                <div className="col-sm-4" >
                                    <select  className="form-control" id="turma" name="turma"
                                            onChange={e => onInputChange(e)}> 
                                               {
                                           prov.map((provs) =>(
                                        <option>{provs.turma}</option>
                                               ))}  
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="row">
                                <div className="col-lg-6 ">
                                    <div className="form-group row campo">
                                        <label>Exemplo:</label>
                                        <div className="col-sm-9">
                                        <select  className="form-control" id="exemplo" name="exemplo"
                                            onChange={e => onInputChange(e)}> 
                                               {
                                           ex.map((exemplo) =>(
                                            <option>{exemplo.titulo}</option>
                                               ))}  
                                           </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                                <div className="row">
                                    <div className="col-lg-6 ">
                                        <div className="form-group row campo">
                                            <label>Texto 1:</label>
                                            <div className="col-sm-9">
                                            <select  className="form-control" id="texto" name="texto"
                                            onChange={e => onInputChange(e)}> 
                                               {
                                           text.map((texto) =>(
                                            <option>{texto.titulo}</option>
                                               ))}  
                                           </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="row">
                                <div className="col-lg-6 ">
                                    <div className="form-group row campo">
                                        <label>Texto 2:</label>
                                        <div className="col-sm-9">
                                        <select  className="form-control" id="texto2" name="texto2"
                                            onChange={e => onInputChange(e)}> 
                                               {
                                           text.map((texto) =>(
                                            <option>{texto.titulo}</option>
                                               ))}  
                                           </select>
                                        </div>
                                    </div>
                                </div>       
                            </div>
                            <div className="row">
                                <div className="col-lg-6 ">
                                    <div className="form-group row campo">
                                        <label>Texto 3:</label>
                                        <div className="col-sm-9">
                                        <select  className="form-control" id="texto3" name="texto3"
                                            onChange={e => onInputChange(e)}> 
                                               {
                                           text.map((texto) =>(
                                            <option>{texto.titulo}</option>
                                               ))}  
                                           </select>
                                        </div>
                                    </div>       
                                </div>
                            </div> 
                            <div>
                                <button type="submit" className="btn botao1">Gerar</button>
                            </div>  
                        </div>
                    </div>
                </div> 
            </form>   
        </div>
   
      
        )
    }



export default CriarProvas;