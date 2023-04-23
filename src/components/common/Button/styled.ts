import styled from "styled-components";

// Div - Primary
export const Div = styled.div`
  /* Desktop */
  min-width: 192px;
  height: 48px;
  background-color: var(--darkGreen);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  span {
    color: var(--white);
    padding: 12px 32px;
    font-size: 18px;
    font-weight: 600;
  }
  &:hover {
    background-color: var(--lightGreen);
  }
`;
// Div - Secondary
export const DivVariant = styled.p`
  /* Desktop */
  min-width: 192px;
  height: 48px;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--darkGreen);
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  span {
    color: var(--darkGreen);
    padding: 12px 32px;
    font-size: 18px;
    font-weight: 600;
  }
  :hover {
    border: 2px solid var(--lightGreen);

    span {
      color: var(--lightGreen);
    }
  }
`;
