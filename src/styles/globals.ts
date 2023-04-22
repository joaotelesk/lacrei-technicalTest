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
     --mediumGreen: #B0E0D3;
     --lightGreen: #66AA92;
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
