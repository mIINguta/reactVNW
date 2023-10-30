import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    `


export default function SectionPrimaria() {
    return (
        <section>
            <img src="./imagens/background.png" alt="" />
        </section>
    );
}