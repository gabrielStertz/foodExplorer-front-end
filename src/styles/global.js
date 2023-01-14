import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_GERAL};
    color: ${({theme}) => theme.COLORS.COLOR_STRONG};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, a {
    font-family: 'Roboto', sans-serif;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button,a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;