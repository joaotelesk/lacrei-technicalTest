// Components
import Head from "next/head";
import { MenuLinks } from "@/components/common/MenuLinks";

// style's
import { Main } from "@/styles/home";

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
        <MenuLinks category="secondary" />
        <h1>Home | Lacrei Saúde</h1>
      </Main>
    </>
  );
}
