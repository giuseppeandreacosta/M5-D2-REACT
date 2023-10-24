import React from 'react';
import Navbar from './components/navbar';
import Card from './components/cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Books from './books/fantasy.json'

function App() {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col>
            <Row>
              <Col><Card /></Col>
              <Col><Card /></Col>
              <Col><Card /></Col>
              <Col><Card /></Col>
              <Col><Card /></Col>
              <Col><Card /></Col>
              <Col><Card /></Col>
              <Col><Card /></Col>
              <Col><Card /></Col>
              <Col><Card /></Col>
              <Col><Card /></Col>
              <Col><Card /></Col>
              <Col><Card /></Col>
              <Col><Card /></Col>
              <Col><Card /></Col>
              <Col><Card /></Col>
              <Col><Card /></Col>
              <Col><Card /></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;




