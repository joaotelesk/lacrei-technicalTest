// Components
// style's
import { P, PVariant } from "./styled";

// Utilities
import { ReactNode } from "react";

// Hooks
// Interfaces
interface SubTitleProps {
  children: ReactNode;
  category: "primary" | "secundary";
}

export function SubTitle({ children, category }: SubTitleProps) {
  const Comp = category === "primary" ? P : PVariant;
  return (
    <>
      <Comp>{children}</Comp>
    </>
  );
}
