import React from 'react'
import { Container } from 'react-bootstrap';
import ListBikes from '../components/ListBikes';

const App = () => {
  return (
    <Container fluid>
      <h1>App</h1>
      <ListBikes />
    </Container>
  );
}

export default App
