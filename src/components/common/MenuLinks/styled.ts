import styled from "styled-components";

// Ul - Primary
export const UlPrimary = styled.ul`
  /* Desktop */
  display: flex;
  flex-direction: row;
  gap: 38px;
  /* Mobile */
  @media (max-width: 520px) {
    gap: 16px;
  }
`;
// Ul - Secondary
export const UlSecondary = styled.ul`
  /* Desktop */
  display: flex;
  flex-direction: row;
  gap: 40px;
  /* Mobile */
  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

// Span - Primary
export const SpanPrimary = styled.span<{ isActive: boolean }>`
  /* Desktop */
  font-size: 16px;
  font-weight: 600;
  line-height: 0%;
  color: ${(props) => (props.isActive ? "var(--darkGreen)" : "var(-black)")};
  transform: 1ms;
  &:hover {
    color: ${(props) =>
      props.isActive ? "var(--lightGreen)" : "var(--darkGray)"};
    transition: color 0.2s ease-in-out;
  }
  /* Mobile */
  @media (max-width: 520px) {
    font-size: 14px;
  }
`;
// Span - Secondary
export const SpanSecondary = styled.span<{ isActive: boolean }>`
  /* Desktop */
  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? 600 : 300)};
  color: var(-black);

  &:hover {
    color: var(--darkGray);
    transition: color 0.2s ease-in-out;
  }
  /* Mobile */
  @media (max-width: 520px) {
    font-size: 14px;
  }
`;
