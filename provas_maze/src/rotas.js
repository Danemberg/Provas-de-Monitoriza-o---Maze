import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import {PrivateRoute} from './auth/PrivatePrivateRoute'

import Login from './pages/login'
import PaginaPrincipal from './pages/paginaprincipal'
import RegistarUtilizador from './pages/registar-utilizador'
import ValidarUtilizador from './pages/validar-utilizador-admin'
import RegistoUtilizador from './pages/registo-utilizador'
import GerirExemplos from './pages/gerir-exemplos'
import CriarExemplos from './pages/criar-exemplos'
import EditarExemplos from './pages/editar-exemplos'
import ListarExemplos from './pages/listar-exemplos'
import VisualizarExemplo from './pages/visualizar-exemplo'
import GerirProvas from './pages/gerir-provas'
import Instrucoes from './pages/instrucao-prova'
import ListarProvas from './pages/listar-provas'
import CriarProvas from './pages/criar-provas'
import EditarProvas from './pages/editar-provas'
import VisualizarProva from './pages/visualizar-prova'
import GerirTextos from './pages/gerir-textos'
import CriarTextos from './pages/criar-textos'
import EditarTextos from './pages/editar-textos'
import ListarTextos from './pages/listar-textos'
import VisualizarTexto from './pages/visualizar-texto'
import PaginaPrincipalAdm from './pages/paginaprincipal-adm'
import Footer from './components/footer'


export default () => {
    return(
        
        <AuthProvider>
            <Footer/>
            <BrowserRouter>
                <div>
                    <PrivateRoute exact path="/" component={Login}/> 
                    <PrivateRoute exact path="/registar-utilizador" component={RegistarUtilizador}/>
                    <PrivateRoute exact path="/paginaprincipal-adm/:id" component={PaginaPrincipalAdm}/>
                    <PrivateRoute exact path="/validar-utilizador" component={ValidarUtilizador}/>
                    <PrivateRoute exact path="/registo-utilizador/:id" component={RegistoUtilizador}/>
                    <PrivateRoute exact path="/gerir-exemplos" component={GerirExemplos}/> 
                    <PrivateRoute exact path="/criar-exemplos" component={CriarExemplos}/> 
                    <PrivateRoute exact path="/editar-exemplos/:id" component={EditarExemplos}/>
                    <PrivateRoute exact path="/listar-exemplos" component={ListarExemplos}/>
                    <PrivateRoute exact path="/visualizar-exemplo/:id" component={VisualizarExemplo}/> 
                    <PrivateRoute exact path="/pagina-principal/:id" component={PaginaPrincipal}/>  
                    <PrivateRoute exact path="/gerir-provas" component={GerirProvas}/> 
                    <PrivateRoute exact path="/instrucao-prova" component={Instrucoes}/> 
                    <PrivateRoute exact path="/listar-provas" component={ListarProvas}/> 
                    <PrivateRoute exact path="/criar-provas" component={CriarProvas}/> 
                    <PrivateRoute exact path="/editar-provas/:id" component={EditarProvas}/> 
                    <PrivateRoute exact path="/visualizar-prova/:id" component={VisualizarProva}/> 
                    <PrivateRoute exact path="/gerir-textos" component={GerirTextos}/>
                    <PrivateRoute exact path="/criar-textos" component={CriarTextos}/> 
                    <PrivateRoute exact path="/editar-textos/:id" component={EditarTextos}/>
                    <PrivateRoute exact path="/listar-textos" component={ListarTextos}/> 
                    <PrivateRoute exact path="/visualizar-texto/:id" component={VisualizarTexto}/>  
                </div>
            </BrowserRouter>
        </AuthProvider>     
  
    );
}
