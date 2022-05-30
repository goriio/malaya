import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  
  body {
      line-height: 1.5;
      overflow-wrap: break-word;
  }

  h1, h2, h3 {
      line-height: 2;
  }

  h1 {
      font-size: 1.6rem;
  }

  h2 {
      font-size: 1.2rem;
  }

  h3 {
      font-size: 1rem;
  }

  a {
      text-decoration: none;
  }
`;
