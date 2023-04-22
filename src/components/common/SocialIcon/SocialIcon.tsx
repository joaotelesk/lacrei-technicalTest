// Components
import Image from "next/image";
import Link from "next/link";

// style's
import { Div } from "./styled";

// Utilities
// Hooks
// Interfaces
interface SocialIconProps {
  url: string;
  size: number;
  src: string;
  alt: string;
}

export function SocialIcon({ url, size, src, alt }: SocialIconProps) {
  return (
    <>
      <Link href={url}>
        <Div>
          <Image src={src} width={size} height={size} alt={alt} />
        </Div>
      </Link>
    </>
  );
}
