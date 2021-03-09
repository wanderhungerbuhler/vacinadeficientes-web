import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {margin: 0; padding: 0; box-sizing: border-box; outline: none; }

  body {
    background: #FFF;
  }

  body, input, button, select, option {
    font-family: 'Sora', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;
