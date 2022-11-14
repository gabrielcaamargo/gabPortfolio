import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: "Libre Franklin", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.textColor};
    max-width: 1024px;
    width: 100%;
    margin: auto;
  }
`;
