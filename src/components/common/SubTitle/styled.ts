import styled from "styled-components";

// P - Primary
export const P = styled.p`
  /* Desktop */
  font-size: 24px;
  font-weight: 300;
  color: var(--darkGray);
  line-height: 33px;
  max-width: 453px;
  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 16px;
    max-width: 80%;
    line-height: 20px;
  }
  /* Mobile */
  @media (max-width: 520px) {
    max-width: 90%;
    font-size: 14px;
  }
`;

// P - Secondary
export const PVariant = styled.p`
  /* Desktop */
  font-size: 24px;
  font-weight: 300;
  color: var(--darkGray);
  line-height: 33px;
  min-width: auto;
  max-width: 530px;
  padding-left: 20px;
  border-left: 5px solid var(--darkGreen);
  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 16px;
    max-width: 100%;
    line-height: 20px;
  }
  /* Mobile */
  @media (max-width: 520px) {
    max-width: 90%;
    font-size: 14px;
  }
`;
