import React from 'react';
import Rotas from './rotas'
import {HashRouter} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'



function App() {
  return (
    <HashRouter>
    <div className="container">
      <Rotas/>
    </div>    
    </HashRouter>
  );
}

export default App;
