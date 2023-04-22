// Components
import Head from "next/head";
import { MenuLinks } from "@/components/common/MenuLinks/MenuLinks";

// style's
import { Main } from "@/styles/home";
import { Title } from "@/components/common/Title/Title";
import { SubTitle } from "@/components/common/SubTitle/SubTitle";
import { Button } from "@/components/common/Button/Button";

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
        <section className="flex flex-col gap-y-8">
          <Title>Boas vindas a Lacrei Saúde</Title>
          <SubTitle category="primary">
            Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
          </SubTitle>
          <div className="flex gap-x-16">
            <Button category="Primary" url="#" text="Pessoa Usuária" />
            <Button category="Secondary" url="#" text="Profissional" />
          </div>
        </section>
      </Main>
    </>
  );
}
