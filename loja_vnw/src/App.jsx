import { useState } from 'react'
import Card from './components/Card'
import styled from 'styled-components'

export default function App() {
  
  const Cards = styled.section`
  display: flex;
  border: 1px solid;
  height: 100vh;
  justify-content: space-around;
  `

  return (
    <>
    <h1>Eletrônicos</h1>
    <Cards>
      
      <Card imagem="https://m.media-amazon.com/images/I/41l+tImzWTL._AC_UF1000,1000_QL80_.jpg"
      produto = 'Iphone 15'
      valor = '7.000,00'
      />
     
      <Card imagem="https://microimport.com.br/storage/iphonexr-vermelho-seminovo-com-garantia.png"
      produto = "Iphone XR"
      valor = '2.800.00'
      />
      </Cards>
    </>
  )
}

