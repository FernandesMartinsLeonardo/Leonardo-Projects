import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  background-color: var(--blue);
  padding:20px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  padding: 50px 100px;

  @media (max-width: 425px) {
    padding: 25px;
    align-items: center;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 130px;
  }

  hr{
    height: 135px;
    border-right: 3px solid #FFFF;
    margin-left: 50px;
  }

  @media (max-width: 425px) {
    img {
      height: 100px;
    }

    hr{
      border-right: none;
    }
    
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: -50px;
  img {
    height: 47px;
  }

  span {
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: 2px;
    color: var(--white);
    font-family: "Kapra";
  }

  a {
    font-size: 2rem;
    text-align: left;
    font-weight: bold;
    color: var(--white);

    img {
      transition: transform 0.2s;
      &:hover {
        transform: scale(0.95);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 7px;
    margin-left: 1px;
    h1 {
      text-align: center;
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 425px) {
    img:first-child {
      margin-top: 20px;
    }
  }
`;

export const ListIcons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  p {
    font-family: "Kapra";
    font-size: 2.40rem;
    font-weight: 400;
    color: var(--white);
    text-transform: uppercase;
  }

  li {
    list-style: none;

    img {
      height: 35px;
      margin: 0 5px;
      transition: transform 0.2s;

      &:hover {
        transform: scale(0.85);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 5px;

    p {
      padding: 5px;
    }
  }
`;

export const InfoExtra = styled.div`
  width: 100%;
  display: flex;
  max-width: 800px;
  align-items: center;

  margin: 0 auto;
  padding: 30px;

  p {
    font-size: 0.7rem;
    text-align: center;
    color: var(--white);
  }
  a{
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.45rem;
    }
  }
`;
