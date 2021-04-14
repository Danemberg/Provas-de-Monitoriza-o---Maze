import React from 'react';
import Logo from '../images/LogoMBCL.png';
import '../index.css';

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
                        <input  type="email" name="email" />
                    </div>
                    <div className="campo">
                        <label>Senha: </label>
                        <input  type="password" name="senha" />
                    </div>
                
                <div>
                    <a className="link-registo" href="#">Registar-se</a>
                    <button type="button" class="botao">Entrar</button>
                </div>
                </div>
                </div>
                
            </div>
        )
        
}
export default Login