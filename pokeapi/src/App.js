import React from "react";
import axios from "axios";
import styled from "styled-components";
import Pokedex from "./imagens/Pokedex.png"
import Analogico from "./imagens/Analogico.png"
import Seta from "./imagens/Seta.png"

const ContainerPokemons = styled.div`
  border: 1px solid black;
  width: 460px;
  margin-left: 35%;
  background-color: red;
  border-radius: 12px;
`;

const Tittle = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  max-width: 12vw;
`;

const ContainerTela = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CardPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  background-color: gray;
  width: 32vw;
  margin-top: 1em;
  height: 64vh;

  select {
    font-size: 20px;
    border-radius: 8px;
    background-color: black;
    color: yellow;
    margin: 20px;
    padding: 4px;
  }

  img {
    width: 300px;
    height: 300px;
  }
`;

const Controles = styled.div`

  img{
    max-width: 6vw;
    padding: 2em;
  }
`;

export default class App extends React.Component {
  state = {
    pokemons: [],
    pictures: "",
  };

  componentDidMount() {
    this.getPokemons();
  }
  getPokemons = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    console.log("Pokemons", response.data.results);
    this.setState({ pokemons: response.data.results });
  };

  getPokePicture = async (event) => {
    const url = event.target.value;
    const response = await axios.get(`${url}`);
    this.setState({ pictures: response.data.sprites.front_default });
  };
  render() {
    const pokeList = this.state.pokemons.map((poke) => {
      return (
        <option key={poke.name} value={poke.url}>
          {poke.name}
        </option>
      );
    });
    return (
      <ContainerPokemons>
        <Tittle>
          <Logo src={Pokedex}/>
        </Tittle>
        <ContainerTela>
          <CardPokemon>
            <select onChange={this.getPokePicture}>
             <option>Selecione um Pokemon</option>
              {pokeList}
            </select>
           {this.state.pictures && (
              <img src={this.state.pictures} alt="foto do pokemon" />
            )}
          </CardPokemon>
          <Controles>
            <img src={Analogico}/>
            <img src={Seta}/>
          </Controles>
        </ContainerTela>
      </ContainerPokemons>
    );
  }
}
