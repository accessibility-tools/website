import { createGlobalStyle, css } from 'styled-components';
import { color, typography } from './style';

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.p}px;
  color: ${color.primary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  * {
    box-sizing: border-box;
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
  }
  h1,
  h2 {
    font-family: ${typography.type.secondary};
  }
  button,
  a,
  .subtitle {
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.medium};
    text-transform: uppercase;
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
`;

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Roboto:wght@400;500;700&display=swap');
  body {
    ${bodyStyles}
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;