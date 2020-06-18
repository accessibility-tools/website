import { createGlobalStyle, css } from "styled-components";
import { color, typography } from "./style";

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(1.2em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
  color: ${color.primary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  * {
    box-sizing: border-box;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${color.white}, 0 0 0 7px ${color.darkBlue};
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.bold};
    margin: 0;
    padding: 0;
    max-width: 40ch;
  }
  h1,
  h2 {
    font-family: ${typography.type.secondary};
  }

  h1 {
    font-size: calc(34px + (56 - 34) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.2em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
  }
  h2 {
    font-size: calc(28px + (34 - 28) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.2em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
  }
  h3 {
    font-size: calc(22px + (26 - 22) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.2em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
  }
  h4 {
    font-size: calc(18px + (24 - 18) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.2em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
  }
  h5,
  p,
  button,
  a,
  label,
  summary {
    font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.2em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
    max-width: 40ch;
  }

  .subtitle {
    font-size: calc(16px + (22 - 16) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.2em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
  }

  button,
  a,
  label,
  .subtitle {
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.medium};
    text-transform: uppercase;
    letter-spacing: 0.07rem;
    margin: 0;
  }

  li {
    list-style: none;
  }

  button {
    border: 3px solid transparent;
    border-radius: 2px;
  }

  a {
    border-radius: 3px;
  }

  sub,
  sup {
    font-size: 0.8em;
  }
  sub {
    bottom: -0.2em;
  }
  sup {
    top: -0.2em;
  }
  b,
  em {
    font-weight: ${typography.weight.bold};
  }
  .icon {
    width: 1em;
    height: 1em;
    max-width: 100%;
    max-height: 100%;
  }

  .key-press {
    background-color: ${color.lightPurple};
  }

  .key-press-alt {
    background-color: ${color.darkBlue};
  }

  summary {
    font-weight: ${typography.weight.bold};
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    overflow-x: hidden;
  }

  body {
    ${bodyStyles}
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;
