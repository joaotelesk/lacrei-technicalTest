import {
  DefaultTheme,
  createGlobalStyle,
  ThemedGlobalStyledClassProps,
} from "styled-components";

interface GlobalStyleProps
  extends ThemedGlobalStyledClassProps<{}, DefaultTheme> {}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
 :root {
     --white: #FFFFFF;
     --darkGreen: #018762;
     --lightGreen: #87CDBA;
     --black: #1F1F1F;
     --lightGray: #EEEEEE;
     --darkGray: #515151;
 }

  html,body {
    width: 100vw;
    height: 100vh;
  }
  body {
    background-color: var(--white);
    overflow-x: hidden;
  }
`;
