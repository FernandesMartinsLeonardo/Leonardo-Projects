import React from 'react';
import {
    ContainerFooter,
    ContainerImg,
    ContainerInfo,
    InfoExtra,
    InfoWrapper,
    ListIcons,
  } from "./styles";
  
  import imgLogoZelo from "../../assets/logo_GrupoZelo.png";
  
  import instagramImg from "../../assets/instagram.png";
  import youtubeImg from "../../assets/youtube.png";
  import facebookImg from "../../assets/facebook.png";
  import linkedinImg from "../../assets/linkedin.png";
  
  import redesSociais from "../../assets/redes_sociais.png";
  import urlImg from "../../assets/WWW.png";
  
  export function Footer() {
    const urlCondicion = "http://www.susep.gov.br";
    return (
      <ContainerFooter>
        <InfoWrapper>
          <ContainerImg>
            <img src={imgLogoZelo} alt="" />
            <hr></hr>
          </ContainerImg>
  
          <ContainerInfo>
            <img src={redesSociais} alt="" />
            <ListIcons>
              <li>
                <a
                  href="https://www.youtube.com/c/GrupoZeloBR"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={youtubeImg} alt="youtube" />
                </a>
              </li>
  
              <li>
                <a
                  href="https://www.facebook.com/grupozelobr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={facebookImg} alt="facebook" />
                </a>
              </li>
  
              <li>
                <a
                  href="https://www.instagram.com/grupozelobr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagramImg} alt="instagram" />
                </a>
              </li>
  
              <li>
                <a
                  href="https://www.linkedin.com/company/grupozelo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedinImg} alt="linkedin" />
                </a>
              </li>
  
              <p>/grupozelobr</p>
            </ListIcons>
  
            <a href="https://grupozelo.com/">
              <img src={urlImg} alt="www" style={{ height: 44 }} />
            </a>
          </ContainerInfo>
        </InfoWrapper>
  
        <InfoExtra>
          <p>
            Promoção da{" "}
            <strong>COMPANHIA BRASILEIRA DE SERVIÇOS FUNERÁRIOS LTDA</strong>,
            CNPJ 27.630.446/0001-56, com a distribuição gratuita de prêmios por
            meio de sorteios lastreados em Títulos de Capitalização da Modalidade
            Incentivo de Contribuição Única, aprovados pelos Processos SUSEP n°
            <strong>15414.611935/2022-45 e 15414.611086/2022-20</strong>,
            garantidos pela <strong>CAPEMISA Capitalização S/A</strong>, CNPJ
            14.056.028/0001- 55.{" "}
            <strong>
              É proibida a venda de título de capitalização a menores de dezesseis
              anos. O valor não exigido dentro do prazo prescricional,
              estabelecido pela legislação em vigor, acarretará a perda desse
              direito
            </strong>
            . Leia o regulamento completo em www.grupozelo.com. SAC CAPEMISA
            Capitalização S/A 0800 940 1130, disponível 24h por dia, sete dias por
            semana. Ouvidoria 0800 707 4936, de segunda a sexta-feira, das 8h às
            17h.
            <strong>
              {" "}
              Antes de contratar consulte previamente as Condições Gerais. As
              condições contratuais/regulamento deste produto protocolizadas pela
              sociedade junto à SUSEP poderão ser consultadas no endereço
              eletrônico <a href={urlCondicion}>http://www.susep.gov.br</a> , de
              acordo com o número de processo constante da proposta. Prêmios
              líquidos de imposto de renda.
            </strong>
          </p>
        </InfoExtra>
      </ContainerFooter>
    );
  }