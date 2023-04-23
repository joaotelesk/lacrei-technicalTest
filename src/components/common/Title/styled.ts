import styled from "styled-components";

// H1
export const H1 = styled.h1`
  /* Desktop */
  color: var(--black);
  font-size: 48px;
  font-weight: 600;
  max-width: 453px;
  line-height: 65px;
  /* Tablet */
  @media (max-width: 768px) {
    font-size: 32px;
    max-width: 100%;
  }
  /* Mobile */
  @media (max-width: 520px) {
    font-size: 24px;
  }
`;
