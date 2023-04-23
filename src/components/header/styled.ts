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
  padding: 14px 4rem;
  /* tablet */
  @media (max-width: 768px) {
    padding: 12px 2rem;
    padding-top: 18px;
  }
  /* Mobile */
  @media (max-width: 520px) {
    flex-direction: column;
    padding: 6px 1rem;
    padding-top: 18px;
  }
`;
// Logo
export const Logo = styled.span`
  /* Desktop */
  color: var(--darkGreen);
  font-size: 32px;
  font-weight: 600;
  line-height: 90%;
  &:hover {
    color: var(--lightGreen);
    transition: color 0.2s ease-in-out;
  }
`;
