import React from 'react';
import Header from './Header';
import Description from './Description';
import Cycle from './Cycle';
import Nav from './Nav';
import { Container, Row, Col } from 'react-grid-system';
function Main() {
  return (
    <div>
    <Container>
     
      <Row style={{color:"red"}}>
      <Header />               
      </Row>
      <Row>
          <Col sm={8}>
              <Cycle />
          </Col>
          <Col sm={4}>
              <Description />
          </Col>
      </Row>    
    </Container>
    </div>
  );
}

export default Main;
