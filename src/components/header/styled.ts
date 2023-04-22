import styled from "styled-components";

// Container
export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: var(--lightGray);
  align-items: center;
  gap: 0 30px;
  padding: 17px 4rem;
  position: fixed;

  /* tablet */
  @media (max-width: 768px) {
    justify-content: center;
    padding: 1rem 2rem;
  }
`;

// Logo
export const Logo = styled.span`
  color: var(--darkGreen);
  font-size: 32px;
  font-weight: 700;
  &:hover {
    color: var(--lightGreen);
    transition: color 0.2s ease-in-out;
  }
`;
