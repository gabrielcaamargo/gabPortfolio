import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: "Karla", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.textColor};
    margin: auto;
  }

  button {
    cursor: pointer;
  }
`;
