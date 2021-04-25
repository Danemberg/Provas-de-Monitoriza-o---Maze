import React from 'react'

import {Switch, Route, Link} from 'react-router-dom'

import Login from './pages/login'
import PaginaPrincipal from './pages/paginaprincipal'
import RegistarUtilizador from './pages/registar-utilizador'
import ValidarUtilizador from './pages/validar-utilizador-admin'
import RegistoUtilizador from './pages/registo-utilizador'
import GerirExemplos from './pages/gerir-exemplos'
import CriarExemplos from './pages/criar-exemplos'
import EditarExemplos from './pages/editar-exemplos'
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
import Navbar from './components/navbar'
import Footer from './components/footer'



export default () => {
    return( //exact significa true; exact={false}
        <div>
       <Navbar>
            <a href="/pagina-principal"></a>
            <a href="/registar-utilizador"></a>
            <a href="/validar-utilizador"></a>
            <a href="/registar-utilizador/:email?"></a>
            <a href="/gerir-exemplos"></a>
            <a href="/criar-exemplos"></a>
            <a href="/editar-exemplos"></a>
            <a href="/gerir-provas"></a>
            <a href="/instrucao-prova"></a>
            <a href="/listar-provas"></a>
            <a href="/criar-provas"></a>
            <a href="/editar-provas"></a>
            <a href="/visualizar-prova"></a>
            <a href="/gerir-textos"></a>
            <a href="/criar-textos"></a>
            <a href="/editar-textos"></a>
            <a href="/listar-textos"></a>
            <a href="/visualizar-texto"></a>
            <a href="/paginaprincipal-adm"></a>
        </Navbar>

        <Footer>
        <a href="/pagina-principal"></a>
        <a href="/paginaprincipal-adm"></a>
        </Footer>
        <main>
            <Switch>
                <Route exact path="/" component={Login}/> 
                <Route exact path="/registar-utilizador" component={RegistarUtilizador}/>
                <Route exact path="/pagina-principal" component={PaginaPrincipal}/>
                <Route exact path="/validar-utilizador" component={ValidarUtilizador}/>
                <Route exact path="/registar-utilizador/:email?" component={RegistoUtilizador}/>
                <Route exact path="/gerir-exemplos" component={GerirExemplos}/> 
                <Route exact path="/criar-exemplos" component={CriarExemplos}/> 
                <Route exact path="/editar-exemplos" component={EditarExemplos}/>
                <Route exact path="/gerir-provas" component={GerirProvas}/> 
                <Route exact path="/instrucao-prova" component={Instrucoes}/> 
                <Route exact path="/listar-provas" component={ListarProvas}/> 
                <Route exact path="/criar-provas" component={CriarProvas}/> 
                <Route exact path="/editar-provas" component={EditarProvas}/> 
                <Route exact path="/visualizar-prova" component={VisualizarProva}/> 
                <Route exact path="/gerir-textos" component={GerirTextos}/>
                <Route exact path="/criar-textos" component={CriarTextos}/> 
                <Route exact path="/editar-textos" component={EditarTextos}/>
                <Route exact path="/listar-textos" component={ListarTextos}/> 
                <Route exact path="/visualizar-texto" component={VisualizarTexto}/>  
                <Route exact path="/paginaprincipal-adm" component={PaginaPrincipalAdm}/>
            </Switch>
        </main>
</div>
    )
}
