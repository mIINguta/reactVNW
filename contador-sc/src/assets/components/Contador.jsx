import React, {useState} from 'react'
import * as S from './style'
import { GlobalStyle }  from './global';

export default function Contador(){

    const [valor, setValor] = useState(0);
    const Incrementar = () => {
        valor == 10 ? setValor(valor): setValor(valor+1)
    }
    const Decrementar = () => {
        valor == 0 ? setValor(valor): setValor(valor-1)
    }

    return (
        <>
        <S.FlexSec className='contador'>
            <GlobalStyle/> <h2>{valor}</h2>
            <S.ButtonAdd onClick={Incrementar}>+</S.ButtonAdd>
           
           <S.ButtonRmv onClick={Decrementar}>-</S.ButtonRmv>
        </S.FlexSec>
        
        </>
    )
}