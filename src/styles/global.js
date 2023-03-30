import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
  font-size: 62.5%;

  --bg-geral-dark: ${({theme}) => theme.COLORS.BACKGROUND_GERAL};
  --bg-geral-light: ${({theme}) => theme.COLORS.COLOR_STRONG};
  --bg-elements-dark: ${({theme}) => theme.COLORS.BACKGROUND_ELEMENTS};
  --bg-elements-light: ${({theme}) => theme.COLORS.COLOR_MEDIUM};
  --bg-cards-dark: ${({theme}) => theme.COLORS.BACKGROUND_CARDS};
  --bg-cards-light: ${({theme}) => theme.COLORS.COLOR_LIGHT};
  --bg-gray: ${({theme}) => theme.COLORS.BACKGROUND_GRAY};

  --color-red: ${({theme}) => theme.COLORS.RED};
  --color-light-blue: ${({theme}) => theme.COLORS.LIGHT_BLUE};
  --color-dark-blue: ${({theme}) => theme.COLORS.DARK_BLUE};

  --fc-strong-dark: ${({theme}) => theme.COLORS.COLOR_STRONG};
  --fc-strong-light: ${({theme}) => theme.COLORS.BACKGROUND_GERAL};
  --fc-medium-dark: ${({theme}) => theme.COLORS.COLOR_MEDIUM};
  --fc-medium-light: ${({theme}) => theme.COLORS.BACKGROUND_GERAL};
  --fc-light-dark: ${({theme}) => theme.COLORS.COLOR_LIGHT};
  --fc-light-light: ${({theme}) => theme.COLORS.BACKGROUND_ELEMENTS};
  --fc--footer-right-dark: ${({theme}) => theme.COLORS.COLOR_FOOTER_RIGHT};
  --fc-footer-left-dark: ${({theme}) => theme.COLORS.COLOR_FOOTER_LEFT};
  --fc--footer-light: ${({theme}) => theme.COLORS.BACKGROUND_GRAY};
  }

  body {

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