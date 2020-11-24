import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
      padding: 0px;
      margin: 0px;
      outline: 0px;
      box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    border: none;
  }

  button {
    cursor: pointer;
  }

  body {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: #252525;
    background: #f4f4f4;
  }
` 