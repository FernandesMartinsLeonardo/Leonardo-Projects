import React, { useRef, useState } from "react";
import styled from "styled-components";
import ProfileCard from "./components/ProfileCards/ProfileCards";
import Home from "./components/Home/Home";
import Matches from "./components/Matches/Matches";
import axios from "axios";
import logo from "./imagens/logo.jpeg"
import relacao from "./imagens/relacao.png"
import conversa from "./imagens/conversa.png"

const Header = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  background-color: #a6a6a6;


  button {
    border: none;
    background-color: #a6a6a6;
    margin: 20px;
  }
`;

const Logo = styled.img`
  max-width: 15vw;
`;

const Relacao = styled.img`
  max-width: 4vw;
`;

const Conversa = styled.img`
  max-width: 6vw;
`;

const AppContainer = styled.div`
  border: 1px solid black;
  width: 430px;
  padding-bottom: 20px;
  background-color: #fdfa00;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Match = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-size: 32px;

`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 12px;

  button {
    border-radius: 12px;
    border: 4px solid black;
    font-size: 16px;
    background-color: #ff19cf;
  }
`;

const App = () => {
  const [tab, setTab] = useState("");

  const matchesRef = useRef();

  const displayProfileCard = () => {
    setTab("profile card");
  };

  const displayMatches = () => {
    setTab("matches");
  };

  const displayHome = () => {
    setTab("home");
  };

  const changeTab = () => {
    switch (tab) {
      case "profile card":
        return <ProfileCard />;

      case "matches":
        return <Matches ref={matchesRef} />;

      default:
        return (
          <Home
            displayProfileCard={displayProfileCard}
            displayMatches={displayMatches}
          />
        );
    }
  };

  const clearApp = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-martins/clear"
      )
      .then((res) => {
        console.log(res.data);
        matchesRef.current.clearMatches();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AppContainer>
      <Header>
        <Match onClick={displayProfileCard}> <Relacao src={relacao} /> </Match>
        <button onClick={displayHome}>
        <Logo src={logo} />
        </button>
        <Match onClick={displayMatches}> <Conversa src={conversa} /> </Match>
      </Header>
      {changeTab()}
      <Footer>
        <button onClick={clearApp}>Reiniciar</button>
      </Footer>
    </AppContainer>
  );
};

export default App;
