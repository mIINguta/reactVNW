import React from 'react';
import Principal from './assets/components/Principal';
import Filmes from './assets/components/Filmes';
import Musicas from './assets/components/Musicas';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {


  return (
    <>

    <h1>Funcionando</h1>

   

     <BrowserRouter>
      <nav>
      <ul>
        <li><Link to="/">Principal</Link></li>
        <li><Link to="/filmes">Filmes</Link></li>
        <li><Link to="/musicas">Musicas</Link></li>
      </ul>
    </nav>
      <Routes>
          <Route path='/' element={<Principal/>}/>
          <Route path='/filmes' element={<Filmes/>}/>
          <Route path='/musicas' element={<Musicas/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
