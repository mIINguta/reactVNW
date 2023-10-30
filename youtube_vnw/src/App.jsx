import { useEffect, useState } from 'react'
import styled from 'styled-components'


const Modal = styled.section`
  background-color: orange;
  border: 1px solid;
  text-align: center;
  `;
  const BtnClose = styled.button`
  width: 5vw;
  height: 5vh;
  font-size: 1.5em;
  background-color: red;
  color: #fff;
  `;

export default function App() {

  const [showModal, setShowModal] =  useState(false);
  useEffect(()=>{
    setShowModal(estado =>{
      setTimeout[()=> {
          estado = true, '500'
      }]
    })
      
    }, [showModal]);

  return (
    <>
      <main>
        {showModal && 
        <Modal>
          <BtnClose>X</BtnClose>
          <h2>Preparem-se para uma surpresa!</h2>
        </Modal> 
        }
        
        <h1>Youtube</h1>
        <section>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cnB4aGQDDQU?si=7vh7xtJ9ju4lt3xe" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
          </iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Dh49wJmmsrA?si=rWL3f43Hy3SNgfK6" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
          </iframe>
        </section>
      </main>
    </>
  )
}


