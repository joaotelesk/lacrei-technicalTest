// Components
import Head from "next/head";
import { Title } from "@/components/common/Title/Title";
import { SubTitle } from "@/components/common/SubTitle/SubTitle";
import Image from "next/image";

// style's
import {
  Main,
  Section,
  DivContent,
  DivText,
  DivImg,
} from "@/styles/StylePages";

// Utilities
// Hooks
// Interfaces

export default function Profissional() {
  return (
    <>
      <Head>
        <title>Profissional | Lacrei Saúde</title>
        <meta name="title" content="Home | Lacrei Saúde" />
        <meta
          name="description"
          content="Pessoas LGBTQUA+ nem sempre têm boas experiências ao cuidar da saúde do corpo e da mente. Para mudar esse cenário criamos o Lacrei Saúde."
        />
      </Head>
      <Main>
        <Section>
          <DivContent>
            <DivText>
              <Title>Profissional</Title>
              <SubTitle category="secundary">
                Buscamos recrutar pessoas profissionais da saúde que entendam as
                necessidades e se comprometam com o bem-estar da comunidade
                LGBTQIAPN+
              </SubTitle>
            </DivText>
          </DivContent>
          <DivImg>
            <Image
              src="/Image-Profissional.svg"
              width={516}
              height={421}
              alt="Imagem da pagina Home"
              priority
            />
          </DivImg>
        </Section>
      </Main>
    </>
  );
}
