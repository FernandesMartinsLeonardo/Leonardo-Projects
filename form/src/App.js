import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from "styled-components";

const Titulo = styled.h1 `
  text-align: center;
  border-bottom: 4px solid black;
`;
const Perguntas = styled.div `
  text-align: center;

  button{
    border-radius: 12px;
    border: none;


    :hover{
      background-color: black;
      color: white;
    }
  }
`;

export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;

      default:
        return <Final />;
    }
  };

  proximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <div>
        <Titulo>Formulário</Titulo>
        <Perguntas>
          {this.renderizaEtapa()}
          <br />
          {this.state.etapa !== 4 && (
            <button onClick={this.proximaEtapa}>Próxima etapa</button>
          )}
        </Perguntas>
      </div>
    );
  }
}
