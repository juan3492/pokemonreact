import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.scss';
import Browser from './components/Browser';
import Error from './components/Error';
import Nav from './components/Nav';
import Review from './components/Review';
import Team from './components/Team';

function App() {
  return (
    <Provider store={store}>
      <Error/>
      <Nav/>
      <Container>
          <Browser/>
          <Team/>
          <Review/>
      </Container>
    </Provider>
  );
}

export default App;
