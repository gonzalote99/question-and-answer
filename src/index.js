import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom'
import App from './App';
import styles from './style.css';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <h4 className="float-end pe-5 fs-5 mt-4 display-6 border me-2 text-center">
      Created by Mehmet SAYIN💻</h4>
  </StrictMode>
);
