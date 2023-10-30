import React, {useState} from 'react';
import * as styled from '../../../public/styles/section'



export default function Section(){
    const [sintomas, setSintomas] = useState([
        {
            posicao: 1,
            frase: "Nódulo palpável na mama"
        },
        {
            posicao: 2,
            frase: "Pele avermelhada ou retraída, sem resposta a tratamentos tópicos;"
        },
        {
            posicao: 3,
            frase: "Alterações no mamilo, incluindo a inversão do mamilo ou a saída anormal de secreção"
        },
        {
            posicao: 4,
            frase: "Dor ou inchaço em parte ou na totalidade das mamas"
        },
        {
            posicao: 5,
            frase: "Nódulos cervicais ou na axila"
        },
        
    ]);

    const [prevencao, setPrevencao] = useState([
        {
            medida: "Praticar atividades físicas",
            prioridade: 7
        },
        {
            medida: "Manter peso corporal adequado",
            prioridade: 10
        },
        {
            medida: "Manter alimentação saudável",
            prioridade: 10
        },
        {
            medida: "Reduzir consumo de bebidas alcóolicas",
            prioridade: 6
        }
    ]);
    const [prevencaoFilter, setPrevencaoFilter] = useState([]);

    const prevencaoPrioridade = () => {
        setPrevencaoFilter(
            prevencao.filter((prevencao) => {
                return prevencao.prioridade > 6;
            })
    )
    }

    return(
        <>
            <h2>Os principais sintomas de cancêr de mama são:</h2>

            <styled.Div>
                {sintomas.map( (item, index) => {
                    return (
                    <styled.P key={index}>{item.posicao}. {item.frase}</styled.P>
                    )
                }
                )
                }

               

                <styled.Div>
                <button onClick={() => {prevencaoPrioridade}}>Como previnir o cancêr de mama?</button>
                {prevencaoFilter.map( (item) => {
                    return (
                    <styled.P>{item.medida}. {item.prioridade}</styled.P>
                    )
                }
                )
                }
                </styled.Div>

                    
            </styled.Div>
        </>

    )

                    }