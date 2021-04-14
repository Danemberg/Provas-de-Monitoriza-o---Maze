import React from 'react';
import Rotas from './rotas'
import {HashRouter} from 'react-router-dom'
import Navbar from './components/navbar'



function App() {
  return (
    <HashRouter>
    <div className="container">
     <Navbar/>
      <Rotas/>
    </div>    
    </HashRouter>
  );
}

export default App;
