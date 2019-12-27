import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.scss';
import Browser from './components/Browser';
import Team from './components/Team';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <main>
          <h1>PokeTeam</h1>
          <Browser/>
          <Team/>
        </main>
      </Container>
    </Provider>
  );
}

export default App;
