import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import bottom_right from './images/arr111.gif';
import bottom_up from './images/arr222.gif';
import bottom from './images/arr333.gif';
import top_bottom from './images/a7.gif';
import bottom_left from './images/arr444.gif';
import cacoon from './images/3.png';
import egg from './images/1.png';
import laarva from './images/2.png';
import moth from './images/4.png';
import silkworm from './images/5.png';

function Cycle(props) {
  
  return (
    <div style={{paddingTop : "50px"}}>
    <Row style={{height:"150px"}}>
        
        <Col></Col>      
        <Col></Col>
        <Col>
          { props.adult ? <img src={bottom_right} style={{height:"50px",width:"100px"}}/> : null }
        </Col>
        <Col>
          { props.egg ? <img src={egg} style={{height:"100px",width:"100px"}}/> : null }
        </Col>
        <Col style={{paddingTop:"50px",paddingRight:"150px"}}>
          { props.larva ? <img src={top_bottom} style={{height:"75px",width:"100px",justifyContent:"center"}}/> : null }
        </Col>
        <Col></Col>
    </Row>
    <Row style={{height:"150px"}}>
      <Col></Col>
      <Col>
       { props.adult ? <img src={silkworm} style={{height:"100px",width:"150px",justifyContent:"center"}}/> : null }
      </Col>
      <Col></Col>
      <Col></Col>
      <Col>
        { props.larva ? <img src={laarva} style={{height:"100px",width:"100px"}}/> : null }
      </Col>
      <Col></Col>
    </Row>
    <Row style={{height:"150px"}}>
      <Col></Col>
      <Col style={{paddingLeft:"100px"}}>
        { props.adult ? <img src={bottom_up} style={{height:"100px",width:"100px",justifyContent:"center"}}/> : null }
      </Col>
      <Col></Col>
      <Col></Col>
       <Col>
        { props.pupa ? <img src={bottom_left} style={{height:"100px",width:"50px"}}/> : null }
       </Col>
      <Col>
       
      </Col>
    </Row>
    {/* <Row style={{height:"100px"}}>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
    </Row> */}
    <Row style={{height:"150px"}}>
      <Col></Col>
      <Col style={{paddingLeft:"200px"}}>
       { props.moth ? <img src={moth} style={{height:"100px",width:"100px"}}/> : null }
      </Col>
      <Col style={{paddingTop:"20px"}}>
        { props.moth ? <img src={bottom} style={{height:"50px",width:"100px"}}/> : null }
      </Col>
      <Col style={{paddingRight:"100px"}}>
        { props.pupa ? <img src={cacoon} style={{height:"100px",width:"100px",padding:"10px"}}/> : null }
      </Col>
      <Col></Col>
    </Row>  
    </div>
  );
}

export default Cycle;
