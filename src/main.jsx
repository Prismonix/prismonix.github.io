import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Importing global styles
import App from './App.jsx'; // Importing the App component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
