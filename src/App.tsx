import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/route';

import GlobalStyle from './styles/globals';

const App = () => (
  <Router>
    <Routes />
    <GlobalStyle/>
  </Router>
);

export default App;
