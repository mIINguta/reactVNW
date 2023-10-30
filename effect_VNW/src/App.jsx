import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [carro, setCarro] = useState("Corolla");

  const changeCar = () =>{
    setCarro(carro === "Corolla"? "Civic": "Corolla");
  }
  //monitora efeitos colaterais
  // sem array de dependencias, ele ira rodar em qualquer mudança do nosso site.

  // useEffect(() =>{
  //   alert("Eu sou um efeito colateral");
  // });

  // esse dependerá do argumento passado, caso esteja vazio, só funcionará uma vez.
  useEffect(()=>{
    alert("Eu sou um efeito colateral");
  },
  []
  )
  return (
    
    
    <>
    <h1>{carro}</h1>
    <button onClick={changeCar}>Trocar Carro</button>
    
      
    </>
  )
}

export default App
