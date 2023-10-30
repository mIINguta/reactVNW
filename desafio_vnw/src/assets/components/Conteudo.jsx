import React from 'react';
import styled from 'styled-components';
import SectionPrimaria from './SectionPrimaria';

const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
`
const Button = styled.button`
border-radius: 20px;
padding: 10px;
background-color: #EA69A0;
width: 15vw;
`
const SectionG = styled(Section)`
flex-direction: row;
gap: 40px;
`


export default function Conteudo(){
    return (<>
    <SectionG>
            <SectionPrimaria/>
            <Section>
                <h1>Outubro Rosa: Conscientização e Esperança</h1>
                <p>O Outubro Rosa é um movimento global que acontece em outubro para aumentar a conscientização sobre o câncer de mama. A cor rosa é o símbolo dessa causa, representando esperança e solidariedade. Durante este mês, lembramos a importância da detecção precoce, apoio às pessoas afetadas e doações para a pesquisa. Vamos juntos lutar contra o câncer de mama.</p>
                <Button>Saiba Mais</Button>
            </Section>
            </SectionG>
            </>       
    )
}