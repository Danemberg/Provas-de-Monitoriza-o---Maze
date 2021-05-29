import React, {useEffect, useState, alert} from 'react';
import Logo from '../images/LogoMBCL.png';
import '../index.css';
import { Link, useHistory } from 'react-router-dom'

function Login(){
    const [email, setEmail]= useState("")
    const [senha, setSenha]= useState("")
    const history = useHistory();

    useEffect(()=>{
        if(localStorage.getItem("utilizador")){
            history.push("/pagina-principal")
        }
    }, [])
    async function login()
    {
        console.warn(email,senha)
        let item={email,senha};
        let result= await fetch("http://192.168.1.84/projeto-maze/web/rest/utilizador",{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("utilizador",JSON.stringify(result))
        history.push("/pagina-principal")   
    }
   
    
        return(
            <div className="container login">
                <div className="row colleft">
                    <div className="col">
                        <h1 className="titulo" >Plataforma para geração de Provas de Monitorização com base no currículo - Maze</h1>
                        <img src={Logo} height="185" width="250" />
                    </div>
                <div className="col-6 colright">
                        <h1 className="titulo2">Login</h1>
                        <br></br>
                    <div className="campo">
                        <label>Email: </label>
                        <input class="col-sm-9"  type="email"  onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="campo">
                        <label>Senha: </label>
                        <input  type="password" onChange={(e)=>setSenha(e.target.value)} />
                    </div>
                
                <div>
                    <Link className="link-registo" to="/registar-utilizador">Registar-se</Link>
                    <Link  onClick={login}  type="button" to="/pagina-principal" className=" btn botao">Entrar</Link>
                </div>
                </div>
                </div>
                
            </div>
        )
        
}
export default Login