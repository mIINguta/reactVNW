import { useState } from 'react'

export default function App() {
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();
  const [operate, setOperate] = useState();
  const [result, setResult] = useState();
  

  const getNumberOne = (e) =>{
    setNumberOne(Number(e.target.value));
  }
  const getNumberTwo = (e) =>{
    setNumberTwo(Number(e.target.value));
  }

  const operacao = () =>{
      setResult((numberOne) + operate + (numberTwo));

  }

  


  return (
    <>
    <h2>Calculadora</h2>

    <input type="text" placeholder='Numero 1' onChange={getNumberOne}/>
    <input type="text" placeholder='Numero 2'  onChange={getNumberTwo}/>
    <input type="text" placeholder='/ ou * ou + ou - ' onChange={setOperate}/>
    <button onClick={operacao}>Calcular</button>

    <h3>Resultado:{result}</h3>
    </>

  )
}
