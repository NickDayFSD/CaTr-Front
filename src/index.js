import React from 'react';
import { render } from 'react-dom';
import { Browser as Router } from 'react-router-dom';
import App from './components/app/App';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
