import React from 'react';
import {render} from 'react-dom';
import App from './App';
import 'normalize.css';
import './styles.scss'



render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
