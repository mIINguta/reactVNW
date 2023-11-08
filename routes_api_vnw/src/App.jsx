import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Produtos from './assets/Components/Produtos';
import Animacao from './assets/Components/Animacao';
import Home from './assets/Components/Home';

export default function App() {
 

  return (
    <>
    <BrowserRouter>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/produtos'>Produtos</Link></li>
        <li><Link to='/animacao'>Animação</Link></li>
        
        
        
      </ul>
    </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/produtos' element={<Produtos/>} />
        <Route path='/animacao' element= {<Animacao/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}


