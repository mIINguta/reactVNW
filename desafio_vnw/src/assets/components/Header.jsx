import React from 'react';
import styled from 'styled-components'


const HeaderS = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
`
const Ul = styled(HeaderS)`
list-style: none;
gap: 30px;
padding: 20px;
`
const Nav = styled.nav`
display: flex;
justify-content: space-around;
gap: 20px;
`

export default function Header(){
    return(
        <>
        <HeaderS>
            <Ul>
                <li>Inicio</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                    <li>Contribua</li>
                </Ul>
            <Nav>
                <img src="./imagens/Group.svg" alt="" />
                <img src="./imagens/icons8-instagram 1.svg" alt="" />
                <img src="./imagens/icons8-whatsapp 1.svg" alt="" />
            </Nav>


        </HeaderS>
        </>
    )
}