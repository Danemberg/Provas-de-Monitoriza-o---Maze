import React, { useCallback, useContext} from 'react';
import Logo from '../images/LogoMBCL.png';
import { withRouter,Redirect, Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

  const LoginButton = () =>{
  const {loginWithRedirect} = useAuth0();
    
  return(
    
          <div className="container login">
            <div className="col-7 colright">
                <h1 className="titulo" >Plataforma para geração de Provas de Monitorização com base no currículo - Maze</h1>
                <img src={Logo} height="155" width="250" />
                <button onClick={() => loginWithRedirect({appState: {returnTo: '/pagina-principal'}})} type="submit"  className=" btn botao">Entrar</button>
            </div>
          </div>
          );
  
};

export default LoginButton;