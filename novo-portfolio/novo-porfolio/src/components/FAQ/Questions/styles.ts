import styled from "styled-components";

export const QuestionsWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 75rem;
  background: var(--gray-100);

  div {
    color: var(--blue);
    font-family: "Swis721";
    font-size: 1.25rem; 
    font-weight: 900;
    h2{

    }
    p {
      font-size: 1.2rem;
      color: var(--textColor);
      font-weight: 300;
    }
  }

  span{
    font-weight: 300;
    display: block;
    padding: 1rem 0 0 0 ;
    font-weight: 900;
    color:var(--blue);
  }

  li {
    color: var(--black-900);
    font-family: "Swis721";
    font-weight: 300;
    font-size: 1.2rem;
    list-style-type: none;
    
    width: 80%;
    margin: 1.2rem 2rem ;
  }
`;
