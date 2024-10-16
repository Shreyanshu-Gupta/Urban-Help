import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Your CSS file
import App from './App'; // Your main App component
import reportWebVitals from './reportWebVitals'; // Importing reportWebVitals

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// This will log performance metrics if you want
reportWebVitals(); // Call the function to report web vitals
