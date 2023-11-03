import { useState, useEffect } from 'react'
import axios from 'axios'


export default function App() {
const [dados, setDados] = useState([]);


const getDados = async () => {
  const url = await axios.get("https://rickandmortyapi.com/api/character");
  setDados(url.data.results);
  console.log(dados);
}

useEffect( () => {
  getDados()
}, [])


  return (
    <>
    {/* /*conjunto de regras e protocolos que usamos para fazer a comunicação entre dois(cliente e servidor) */ }

     <h1>Estudo sobre API</h1>
      
        {dados.map((item) => (
        <section>
            <figure>
            <img src={item.image} alt={item.name} title={item.name} />
            </figure>
            <p>{item.name}</p>
         </section>
    ))}
   
      </>
  )
}

