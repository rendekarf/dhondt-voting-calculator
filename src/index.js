import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div style={{ marginTop: '100px' }}>
      Credit:
      <a
        href="https://github.com/berkaysson/dhondt-system-calculator"
        style={{ color: 'var(--theme-color)' }}
      >@berkaysson</a>
    </div>
  </React.StrictMode>
);