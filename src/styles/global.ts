import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body, input , button, a {
    font: 14px 'Roboto', sans-serif;
  }
  body {
    background: #000814;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
    border: none;
  }
`;
