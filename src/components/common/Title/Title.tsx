// Components
// style's
import { H1 } from "./styled";

// Utilities
import { ReactNode } from "react";

// Hooks
// Interfaces
interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <>
      <H1>{children}</H1>
    </>
  );
}
