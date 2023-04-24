// Components
import Link from "next/link";
import { MenuLinks } from "@/components/common/MenuLinks/MenuLinks";

// style's
import { Container, Logo } from "./styled";

// Utilities
// Hooks
// Interfaces

export function Header() {
  return (
    <>
      <Container>
        <Link href="/">
          <Logo>Lacrei</Logo>
        </Link>
        <nav>
          <MenuLinks category="primary" />
        </nav>
      </Container>
    </>
  );
}
