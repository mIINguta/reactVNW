import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Carros from './assets/Components/Carros';
import Motos from './assets/Components/Motos';
import Barcos from './assets/Components/Barcos';

function App() {


  return (
    <>
      <h1>Router</h1>
      <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/">Barcos</Link></li>
              <li><Link to="/motos">Motos</Link></li>
              <li><Link to="/carros">Carros</Link></li>
            </ul>
          </nav>


        <Routes>
            <Route path="/" element={<Barcos/>}/>
            <Route path="/motos" element={<Motos/>}/>
            <Route path="/carros" element={<Carros/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
