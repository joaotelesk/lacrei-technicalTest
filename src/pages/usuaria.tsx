// Components
import Head from "next/head";
import { Title } from "@/components/common/Title/Title";
import { SubTitle } from "@/components/common/SubTitle/SubTitle";
import Image from "next/image";

// style's
import { Main, Section, DivContent, DivImg } from "@/styles/StylePages";

// Utilities
// Hooks
// Interfaces

export default function Usuaria() {
  return (
    <>
      <Head>
        <title>Pessoa Usuária | Lacrei Saúde</title>
        <meta name="title" content="Home | Lacrei Saúde" />
        <meta
          name="description"
          content="Pessoas LGBTQUA+ nem sempre têm boas experiências ao cuidar da saúde do corpo e da mente. Para mudar esse cenário criamos o Lacrei Saúde."
        />
      </Head>
      <Main>
        <Section>
          <DivContent>
            <Title>Pessoa Usuária</Title>
            <SubTitle category="secundary">
              A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento
              realizado por profissionais de qualidade e que atendam às suas
              necessidades de forma segura e acolhedora.
            </SubTitle>
          </DivContent>
          <DivImg>
            <Image
              src="/Image-Pessoa.svg"
              width={516}
              height={421}
              alt="Imagem da pagina Home"
            />
          </DivImg>
        </Section>
      </Main>
    </>
  );
}
