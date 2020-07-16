import React from 'react';
import { render } from 'react-dom';
import App from './App';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle `
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
 background: rgba(68, 67, 67, 0.753);
 color: white;
 -webkit-font-smoothing: antialiased;
}

body, input, button {
 font-family: 'Helvetica';
}

button {
 cursor: pointer;
}
`

render(<App /> <GlobalStyle /, document.getElementById('root'));
