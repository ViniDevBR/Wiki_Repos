import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Comfortaa', cursive;
  }

  body {
    background-color: #22272e;
    color: #ffffff
  }
`