import React from 'react';
import styled from 'styled-components';

const Produto = styled.section`
width: 30vw;
border: 1px solid;
`
const Imagem = styled.img`
width: 50%;
height: 40%;
`
export default function Card(props){
    return(
        <Produto>
            <Imagem src={props.imagem} alt={props.produto} />
            <h2>{props.produto}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aperiam sunt voluptatum eos nobis enim voluptates accusamus a soluta quaerat voluptas ullam, sint est at fugiat explicabo eum repudiandae dolorum.</p>
            <h4>{props.valor}</h4>
            <button>Comprar</button>
        </Produto>
    )
}