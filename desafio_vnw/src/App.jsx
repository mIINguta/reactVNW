import { useState } from 'react'
import Header from './assets/components/Header'
import Conteudo from './assets/components/Conteudo'
import { GlobalStyle } from './assets/global'
export default function App() {
  return (

    <>
      <GlobalStyle />
      <Header />

      <Conteudo />
    </>
  )

}
