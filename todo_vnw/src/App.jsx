import React, {useState} from 'react';

export default function App() {
  const [tarefas, setTarefas] = useState();
  const [saveTarefa, setSaveTarefa] = useState([]);

  const getTarefa = (e) =>{
    setTarefas(e.target.value); 
    // target(alvo) - Se refere a tag input
    // value - dentro do target, é referente ao valor do input
  }
  const savveTarefa = () =>{
    setSaveTarefa(saveTarefa.concat(tarefas));
  }
  return (
    <>
      <h2>Lista de Tarefas</h2>
      <input type="text" placeholder='limpar o quarto, varrer a casa..' onChange={getTarefa}/>
      <button onClick={savveTarefa}>Adicionar</button>
     {saveTarefa.map((item, index)=>{
        return (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        )
     })}
    </>
)
  }
