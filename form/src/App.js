import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from "styled-components";
import Labeform from "./imagens/Labeform.png"

const AppContainer = styled.div `
  text-align: center;
  border-bottom: 1px solid black;
  background-color: black;
`;
const Logo = styled.img `
  max-width: 20vw;
`;
const Perguntas = styled.div `
  text-align: center;
  color: white;
  border-top: 1px solid white;
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
      <AppContainer>
        <Logo src={Labeform}/>
        <Perguntas>
          {this.renderizaEtapa()}
          <br />
          {this.state.etapa !== 4 && (
            <button onClick={this.proximaEtapa}>Próxima etapa</button>
          )}
        </Perguntas>
      </AppContainer>
    );
  }
}
