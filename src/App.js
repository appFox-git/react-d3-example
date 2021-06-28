import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import ChartWrapper from './components/ChartWrapper';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar bg='light'>
          <Navbar.Brand>ReactD3</Navbar.Brand>
        </Navbar>
        <Container>
          <ChartWrapper />
        </Container>
      </div>
    );
  }
}

export default App;
