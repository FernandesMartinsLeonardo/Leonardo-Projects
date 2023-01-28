import styled from "styled-components";

export const ContainerFaq = styled.main`
  margin: 0 auto;

  background: var(--gray-100);

  padding: 3.438rem 0px 5.313rem 0px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  

  h1 {
    font-family: "Kapra";
    font-weight: 300;
    letter-spacing: 0.313rem;
    font-size: 5.375rem;
    color: var(--blue);
  }
  h3 {
    font-family: "Kapra";
    font-weight: 300;
    color: var(--textColor);
    font-size: 2rem;
    text-align: center;
    margin-top: 2rem;
    }


    h4 {
    font-family: "Kapra";
    font-weight: 300;
    color: var(--textColor);
    font-size: 2rem;
    text-align: center;

    strong {
      color: var(--blue);
      font-weight: 500;
    }
  }
`;
