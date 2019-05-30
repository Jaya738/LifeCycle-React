import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import cacoon from './images/3.png';
import egg from './images/1.png';
import laarva from './images/2.png';
import moth from './images/4.png';
import silkworm from './images/5.png';

function Cycle(props) {
  
  return (
    <div style={{paddingTop : "50px"}}>
    <Row style={{height:"100px"}}>
        
        <Col></Col>      
        <Col></Col>
        <Col></Col>
        <Col>
          { props.egg ? <img src={egg} style={{height:"100px",width:"100px"}}/> : null }
        </Col>
        <Col></Col>
        <Col></Col>
    </Row>
    <Row style={{height:"100px"}}>
      <Col></Col>
      <Col>
       { props.adult ? <img src={silkworm} style={{height:"100px",width:"150px",justifyContent:"center"}}/> : null }
      </Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
    </Row>
    <Row style={{height:"100px"}}>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
       <Col></Col>
      <Col>
       { props.larva ? <img src={laarva} style={{height:"100px",width:"100px"}}/> : null }
      </Col>
    </Row>
    <Row style={{height:"100px"}}>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
    </Row>
    <Row style={{height:"100px"}}>
      <Col></Col>
      <Col style={{paddingLeft:"200px"}}>
       { props.moth ? <img src={moth} style={{height:"100px",width:"100px"}}/> : null }
      </Col>
      <Col></Col>
      <Col>
        { props.pupa ? <img src={cacoon} style={{height:"100px",width:"100px",padding:"10px"}}/> : null }
      </Col>
      <Col></Col>
    </Row>  
    </div>
  );
}

export default Cycle;
