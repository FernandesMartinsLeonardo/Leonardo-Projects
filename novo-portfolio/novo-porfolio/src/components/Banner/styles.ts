import styled from "styled-components";

export const BackgroundBanner = styled.section`
  width: 100%;
  background: var(--blue);

  img {
    width: 100%
  }

  p {
    padding: 4px;
    font-size: 0.7rem;
    text-align: center;
    color: var(--white);
  }

  @media (max-width: 768px) {
  p {
    font-size: 0.45rem;
  }
}

`;
