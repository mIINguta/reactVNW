import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Produtos(){

    const [produtos, setProdutos] = useState([]);

    const getProdutos = async () => {
    const url = 'https://fakestoreapi.com/products';

    const dadosApi = await axios.get(url);

    setProdutos(dadosApi.data);
    console.log(dadosApi.data)
    };

    useEffect(() =>{
        getProdutos()
    }, [])
    return(
        <>
        <h1>Produtos</h1>

        {produtos.map((item, key)=>(
            <figure key={key}>
                <img src={item.image} alt={item.name} />
               <h2>{item.title}</h2>
                <figcaption>{item.description}</figcaption>
            </figure>

        ))}
        </>
    )
}