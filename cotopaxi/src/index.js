import React from 'react';
import ReactDOM from 'react-dom/client';
import { Question3 } from './components/Question3';
import { Results } from './components/Results';

import './css/Question3.css'
import './css/Results.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Results />
  </React.StrictMode>
);

