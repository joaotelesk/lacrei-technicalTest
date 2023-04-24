import styled from "styled-components";

// Container
export const Container = styled.div`
  /* Desktop */
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: var(--lightGray);
  align-items: center;
  gap: 0px 34px;
  padding: 6px 4rem;
  /* tablet */
  @media (max-width: 1024px) {
    padding: 8px 2rem;
  }
  /* Mobile */
  @media (max-width: 520px) {
    flex-direction: column;
    padding: 6px 1rem;
  }
`;
// Logo
export const Logo = styled.span`
  /* Desktop */
  height: 48px;
  width: auto;
  color: var(--darkGreen);
  font-size: 32px;
  font-weight: 600;
  line-height: none;
  &:hover {
    color: var(--lightGreen);
    transition: color 0.2s ease-in-out;
  }
`;
