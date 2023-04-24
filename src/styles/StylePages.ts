import styled from "styled-components";

// Main
export const Main = styled.main`
  /* Desktop */
  min-height: 64vh;
  width: 100vw;
  padding: 4rem 4rem 0 4rem;
  /* Tablet */
  @media (max-width: 1024px) {
    padding: 1rem 2rem 0px 2rem;
  }
  /* Mobile */
  @media (max-width: 520px) {
    padding: 0 1rem 1rem 1rem;
  }
`;
//Section
export const Section = styled.section`
  /* Desktop */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* Tablet */
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
// DivContent - div dos conteúdos
export const DivContent = styled.div`
  /* Desktop */
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 32px 0;

  justify-items: center;
  /* Tablet */
  @media (max-width: 1024px) {
    gap: 15px 0;
  }
  /* Mobile */
  @media (max-width: 520px) {
    gap: 0 0;
    align-items: center;
  }
`;

// DivText - div de Title e Subtitle
export const DivText = styled.div`
  /* Desktop */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
  gap: 32px 0;
  /* Tablet */
  @media (max-width: 1024px) {
    gap: 15px 0;
  }
  /* Mobile */
  @media (max-width: 520px) {
    gap: 0 0;
  }
`;
// DivButtons - div dos buttons
export const DivButtons = styled.div`
  /* Desktop */
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  width: 450px;
  /* Tablet */
  @media (max-width: 1024px) {
    margin-top: 33px;
    gap: 16px;
    width: auto;
  }
  /* Mobile */
  @media (max-width: 520px) {
    margin-top: 34px;
    flex-direction: column;
  }
`;
//DivImg - div da image
export const DivImg = styled.div`
  /* Desktop */
  max-width: 540px;
  /* Tablet */
  @media (max-width: 1024px) {
    margin: 16px;
  }
  /* Mobile */
  @media (max-width: 520px) {
    margin-top: 16px;
    margin: 50px 0;
  }
`;
