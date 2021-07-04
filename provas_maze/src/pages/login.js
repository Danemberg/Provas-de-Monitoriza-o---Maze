import React, {useEffect, useState, alert} from 'react';
import Logo from '../images/LogoMBCL.png';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';


function Login(){
        const [email, setEmail] = useState("");
        const [senha, setSenha] = useState("");
        const [authState, setAuthState] = useState({
            email: "",
            senha: "",
            status: false,
          });
      
        let history = useHistory();
      
        const login = () => {
          const data = { email: email, senha: senha };
          axios.post("http://192.168.1.84/projeto-maze/web/rest/utilizadors", data)
            .then((response) => {
              if (response.data.error) {
                alert(response.data.error);
              } else {
                localStorage.setItem("accessToken", response.data.token);
                setAuthState({
                  email: response.data.email,
                  senha: response.data.senha,
                  status: true,
                });
                history.push("/pagina-principal");
              }
            });
        };
       
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
                            <input className="col-sm-9"  type="email" name="email" id="email"  onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="campo">
                            <label>Senha: </label>
                            <input  type="password"  name="senha" id="senha" onChange={(e)=>setSenha(e.target.value)} />
                        </div>
                        
                        <div>
                            <Link className="link-registo" to="/registar-utilizador">Registar-se</Link>
                            <button onClick={login}  type="button" to="/pagina-principal" className=" btn botao">Entrar</button>
                        </div>
                        </div>
                    </div>   
                </div>
                );
        
}
export default Login;




