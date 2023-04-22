// Components
import Link from "next/link";

// style's
import { UlPrimary, UlSecondary, SpanPrimary, SpanSecondary } from "./styled";

// Utilities
// Hooks
import { useRouter } from "next/router";

// Interfaces
interface MenuLinksProps {
  category: "primary" | "secondary";
}

export function MenuLinks({ category }: MenuLinksProps) {
  const router = useRouter();
  const CompUl = category === "primary" ? UlPrimary : UlSecondary;
  const CompSpan = category === "primary" ? SpanPrimary : SpanSecondary;
  return (
    <>
      <CompUl>
        {[
          ["Home", "/"],
          ["Pessoas Usuárias", "/usuarios"],
          ["Profissional", "/profissional"],
        ].map(([title, url], index) => (
          <li key={index}>
            <Link href={url} key={title}>
              <CompSpan isActive={router.pathname === url}>{title}</CompSpan>
            </Link>
          </li>
        ))}
      </CompUl>
    </>
  );
}
