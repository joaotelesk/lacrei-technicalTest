// Components
import { MenuLinks } from "@/components/common/MenuLinks/MenuLinks";
import { SocialIcon } from "@/components/common/SocialIcon/SocialIcon";

// style's
import { Container, Hr, Div, Span } from "./styled";

// Utilities
// Hooks
// Interfaces

export function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Hr />
          <MenuLinks category="secondary" />
          <Div>
            <SocialIcon
              url="#"
              size={32}
              src="/icons/InstagramLogo.svg"
              alt="Logo do instagram"
            />
            <SocialIcon
              url="#"
              size={32}
              src="/icons/FacebookLogo.svg"
              alt="Logo do facebook"
            />
            <SocialIcon
              url="#"
              size={32}
              src="/icons/LinkedinLogo.svg"
              alt="Logo do linkedin"
            />
          </Div>
          <Span>Desafio Front-end Lacrei</Span>
        </Container>
      </footer>
    </>
  );
}
