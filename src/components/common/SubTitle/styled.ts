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
  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 100%;
    line-height: 20px;
  }
  /* Mobile */
  @media (max-width: 520px) {
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
  max-width: 453px;
  padding-left: 20px;
  border-left: 5px solid var(--darkGreen);
  /* Tablet */
  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 100%;
    line-height: 20px;
  }
  /* Mobile */
  @media (max-width: 520px) {
    font-size: 14px;
  }
`;
