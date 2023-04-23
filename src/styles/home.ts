import styled from "styled-components";

export const Main = styled.main`
  /* Desktop */
  min-height: 64vh;
  width: 100vw;
  padding: 4rem;
  /* Tablet */
  @media (max-width: 768px) {
    padding: 1rem 2rem 1px 2rem;
  }
  /* Mobile */
  @media (max-width: 520px) {
    padding: 1rem 1rem 1px 1rem;
  }
`;
