import React, {useEffect, useState, alert} from 'react';
import Logo from '../images/LogoMBCL.png';
import '../index.css';
import { Link, useHistory } from 'react-router-dom'

function Login(){ 
  
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
                        <input className="col-sm-9"  type="email"   />
                    </div>
                    <div className="campo">
                        <label>Senha: </label>
                        <input  type="password" />
                    </div>
                
                <div>
                    <Link className="link-registo" to="/registar-utilizador">Registar-se</Link>
                    <Link  type="button" to="/pagina-principal" className=" btn botao">Entrar</Link>
                </div>
                </div>
                </div>
                
            </div>
        )
        
}
export default Login