import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';
import { HashRouter, BrowserRouter } from 'react-router-dom'; // Use HashRouter in github instead of  BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
);