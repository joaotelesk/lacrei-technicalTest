import styled from "styled-components";

// Container
export const Container = styled.div`
  width: 100vw;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 24px 0;

  /* tablet */
  @media (max-width: 768px) {
    padding: 8px 1rem;
    gap: 8px 0;
  }
`;

// Hr
export const Hr = styled.hr`
  border-color: var(--mediumGreen);
  margin-bottom: 4px;
`;
// Div de SocialIcon
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 2rem;
`;

// Span
export const Span = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: var(--darkGray);
`;
