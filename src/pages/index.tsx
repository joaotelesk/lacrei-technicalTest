// Components
import Head from "next/head";
import { Title } from "@/components/common/Title/Title";
import { SubTitle } from "@/components/common/SubTitle/SubTitle";
import { Button } from "@/components/common/Button/Button";
import Image from "next/image";

// style's
import {
  Main,
  Section,
  DivContent,
  DivButtons,
  DivImg,
} from "@/styles/StylePages";

// Utilities
// Hooks
// Interfaces

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Lacrei Saúde</title>
        <meta name="title" content="Home | Lacrei Saúde" />
        <meta
          name="description"
          content="Pessoas LGBTQUA+ nem sempre têm boas experiências ao cuidar da saúde do corpo e da mente. Para mudar esse cenário criamos o Lacrei Saúde."
        />
      </Head>
      <Main>
        <Section>
          <DivContent>
            <Title>Boas vindas a Lacrei Saúde</Title>
            <SubTitle category="primary">
              Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
            </SubTitle>
            <DivButtons>
              <Button category="Primary" url="#" text="Pessoa Usuária" />
              <Button category="Secondary" url="#" text="Profissional" />
            </DivButtons>
          </DivContent>
          <DivImg>
            <Image
              src="/Image-Home.svg"
              width={555}
              height={421}
              alt="Imagem da pagina Home"
            />
          </DivImg>
        </Section>
      </Main>
    </>
  );
}
