import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }

  html {
    background-color: whitesmoke;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    &:active {
      opacity: 0.6;
    }
  }
`;

export default GlobalStyle;
