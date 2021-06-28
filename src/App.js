import React, { Component } from 'react';
import { Navbar, Container, Row, Col, Dropdown } from 'react-bootstrap';
import ChartWrapper from './components/ChartWrapper';
import GenderDropdown from './components/GenderDropdown';

class App extends Component {
  state = {
    gender: 'men',
  };

  genderSelected = gender => this.setState({ gender });

  render() {
    return (
      <div className='App'>
        <Navbar bg='light'>
          <Navbar.Brand>ReactD3</Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col xs={12}>
              <GenderDropdown genderSelected={this.genderSelected} />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ChartWrapper gender={this.state.gender} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
