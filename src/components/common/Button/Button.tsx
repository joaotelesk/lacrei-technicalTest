import Link from "next/link";

import { Div, DivVariant } from "./styled";

interface ButtonProps {
  category: "Primary" | "Secondary";
  text: string;
  url: string;
}

export function Button({ category, text, url }: ButtonProps) {
  const Comp = category === "Primary" ? Div : DivVariant;
  return (
    <Link href={url}>
      <Comp>
        <span>{text}</span>
      </Comp>
    </Link>
  );
}
