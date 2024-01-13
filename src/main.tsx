import React from 'react';
import ReactDOM from 'react-dom/client';
import PlanetsProvider from './context/PlanetsProvider';
import App from './App';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <PlanetsProvider>
        <App />
      </PlanetsProvider>
    </React.StrictMode>,
  );
