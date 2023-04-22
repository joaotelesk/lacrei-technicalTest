import { Layout } from "../components/Layout";
import type { AppProps } from "next/app";
import "@/styles/styles.css";
import { GlobalStyle } from "@/styles/globals";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={{}}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
