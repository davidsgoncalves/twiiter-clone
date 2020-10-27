import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-grid-system';

import Routes from './routes/route';

/* import GlobalStyle from './styles/globals'; */

const App = () => (
  <Router>
    <Container>
      <Routes />
    </Container>
  </Router>
);
export default App;
