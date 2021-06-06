import React, {Component, useEffect, useState} from 'react';
import '../styles/source.css'
import Pokeapi from '../pokeapi/pokeapi'

const Pokedex = () => {

    const [lista, setLista] = useState()

    useEffect(() => {
        const obj = new Pokeapi();
        obj.listar().then(dados => {
            setLista(dados.data.results)
        })
    }, []);

    console.log(lista)
    
    return (
        <div className="container">

            <div className="card">
                <p>Pokémon 1</p>
                <br/>
                <p>Diminutizou as lamúrias dos indivíduos silenciados por seus lugares de dores ressignificando a conversa com inverdades. Desrespeitou a jornada da reparação histórica há tanto tempo necessária fingindo não entender o contexto sócio-cultural.</p>
            </div>

            <div className="card">
                <p>Pokémon 2</p>
            </div>

            <div className="card">
                <p>Pokémon 3</p>
            </div>

            <div className="card">
                <p>Pokémon 4</p>
            </div>

        </div>

    )

}

export default Pokedex;