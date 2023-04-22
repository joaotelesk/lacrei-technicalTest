import styled from "styled-components";

// H1
export const H1 = styled.h1`
  color: var(--black);
  font-size: 48px;
  font-weight: 600;
  max-width: 453px;
  line-height: 65px;

  /* mobile */
  @media (max-width: 570px) {
    font-size: 24px;
    width: auto;
  }
`;
