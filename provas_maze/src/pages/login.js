import React, { useCallback, useContext} from 'react';
import Logo from '../images/LogoMBCL.png';
import { withRouter,Redirect, Link } from 'react-router-dom'
import { authConfig } from '../auth/config.js';
import { AuthContext } from "../auth/AuthContext.js";

export const Login = withRouter(({history}) =>{
  const LoginUtilizador = useCallback(
    async(event) => {
      event.preventDefault();

      const{email, senha} = event.target.elements;

      try{
        await authConfig.auth().signInWithEmailAndPassword(email.value, senha.value)
        history.push('/');
      }catch(error){
        console.log(error);
      }
    },
    [history],
  );
  const {usuario} = useContext(AuthContext);

  if(usuario){
    return <Redirect to="/" />;
  }

  return(
    
          <div className="container login">
              <div className="row colleft">
                  <div className="col">
                      <h1 className="titulo" >Plataforma para geração de Provas de Monitorização com base no currículo - Maze</h1>
                      <img src={Logo} height="185" width="250" />
                  </div>
                 <form onSubmit={LoginUtilizador}>
                    <div className="col-6 colright">
                        <h1 className="titulo2">Login</h1>
                        <br></br>
                    <div className="campo">
                        <label>Email: </label>
                        <input className="col-sm-9"  type="email" name="email" id="email"   />
                    </div>
                    <div className="campo">
                        <label>Senha: </label>
                        <input  type="password"  name="senha" id="senha"  />
                    </div> 
                    <div>
                        <Link className="link-registo" to="/registar-utilizador">Registar-se</Link>
                        <button type="submit"  className=" btn botao">Entrar</button>
                    </div>
                    </div>
                  </form>
              </div>   
          </div>
          );
  
});


export default Login;