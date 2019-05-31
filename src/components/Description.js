import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,CardTitle, CardText } from 'reactstrap';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

function Description(props) {
  return (
    <div>
      <center><p style={{fontWeight:"bold",fontSize:"35px",color:"white",fontFamily:"timeburner"}}>{props.stage.label}</p></center>
      <PerfectScrollbar>
        <p className="overflow-auto" style={{color:"white",fontFamily:"timeburner"}}>{props.stage.description}</p>
      </PerfectScrollbar>
    </div>
  );
}

export default Description;
