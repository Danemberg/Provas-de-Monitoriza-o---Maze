import React from 'react'

import {Switch, Route } from 'react-router-dom'

import Login from './pages/login'
import PaginaPrincipal from './pages/paginaprincipal'
import RegistarUtilizador from './pages/registar-utilizador'
import ValidarUtilizador from './pages/validar-utilizador-admin'
import RegistoUtilizador from './pages/registo-utilizador'


export default () => {
    return( //exact significa true; exact={false}
            <Switch>
                <Route exact path="/registar-utilizador-pages/:email?" component={RegistarUtilizador}/>
                <Route exact path="/" component={Login}/> 
                <Route exact path="/pages" component={PaginaPrincipal}/>
                <Route exact path="/validar-utilizador-pages" component={ValidarUtilizador}/>
                <Route exact path="/registo-utilizador-pages" component={RegistoUtilizador}/>
            </Switch>
    )
}
