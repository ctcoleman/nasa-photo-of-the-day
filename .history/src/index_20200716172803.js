import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle `

`

render(<App />, document.getElementById('root'));
