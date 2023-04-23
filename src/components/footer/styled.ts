import styled from "styled-components";

// Container
export const Container = styled.div`
  /* Desktop */
  width: 100vw;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  /* Tablet */
  @media (max-width: 768px) {
    padding: 8px 2rem;
    gap: 21px 0;
  }
  /* Mobile */
  @media (max-width: 520px) {
    padding: 8px 1rem;
    gap: 21px 0;
  }
`;
// Hr
export const Hr = styled.hr`
  /* Desktop */
  border-color: var(--mediumGreen);
  margin-bottom: 12px;
`;
// Div de SocialIcon
export const Div = styled.div`
  /* Desktop */
  display: flex;
  flex-direction: row;
  gap: 0 2rem;
`;
// Span
export const Span = styled.span`
  /* Desktop */
  font-size: 12px;
  font-weight: 300;
  color: var(--darkGray);
`;
