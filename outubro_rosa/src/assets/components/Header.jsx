import React from "react";
import Logo from '../../../public/imagens/laco_logo.svg'
import * as styled from '../../../public/styles/header';

export default function Header(){
    return (
        <>
            <styled.Header>
            <styled.Nav>
                <figure><styled.Img src={Logo} alt="" /></figure>
                <styled.Ul>
                    <li><styled.A href="">CARTILHA</styled.A></li>
                    <li><styled.A href="">FOLHETO COLO DO ÚTERO</styled.A></li>
                    <li><styled.A href="">FOLHETO MAMA</styled.A></li>
                    <li><styled.A href="">KIT MATERIAIS</styled.A></li>
                </styled.Ul>
            </styled.Nav>
            </styled.Header>
    
        </>
    )
}