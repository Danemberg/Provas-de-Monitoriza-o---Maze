import React from 'react'

import {Switch, Route } from 'react-router-dom'

import Login from './pages/login'
import PaginaPrincipal from './pages/paginaprincipal'
import RegistoUtilizador from './pages/registar-utilizador'


export default () => {
    return( //exact significa true; exact={false}
            <Switch>
                <Route exact path="/registar-utilizador-pages/:email?" component={RegistoUtilizador}/>
                <Route exact path="/" component={Login}/> 
                <Route exact path="/pages" component={PaginaPrincipal}/>
            </Switch>
    )
}
