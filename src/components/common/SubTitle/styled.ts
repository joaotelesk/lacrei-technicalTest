import styled from "styled-components";

// P type Primary
export const P = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: var(--darkGray);
  line-height: 33px;
  max-width: 453px;

  /* mobile */
  @media (max-width: 570px) {
    font-size: 14px;
    width: auto;
    line-height: 20px;
  }
`;

// P type Secondary
export const PVariant = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: var(--darkGray);
  line-height: 33px;
  max-width: 453px;
  padding-left: 20px;
  border-left: 5px solid var(--darkGreen);

  /* mobile */
  @media (max-width: 570px) {
    font-size: 14px;
    width: auto;
    line-height: 20px;
  }
`;
