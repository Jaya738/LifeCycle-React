import React from 'react';
import {Button,ButtonGroup,ButtonToolbar } from 'reactstrap';

class Nav extends React.Component {
  render(){
    return (
      <div>
        <ButtonToolbar>
          <ButtonGroup style={{height:"88px",width:"1292px"}}>
            <Button color="danger" onClick = {() => this.Stage1.bind(this)}> <p style={{fontSize:"200%"}}>Stage1</p></Button>
            <Button color="danger" onClick = {() => this.Stage2()}> <p style={{fontSize:"200%"}}>Stage2</p></Button>
            <Button color="danger" onClick = {() => this.Stage3()}> <p style={{fontSize:"200%"}}>Stage3</p> </Button>
            <Button color="danger" onClick = {() => this.Stage4()}> <p style={{fontSize:"200%"}}>Stage4</p> </Button>
            <Button color="danger" onClick = {() => this.Stage5()}> <p style={{fontSize:"200%"}}>Stage5</p> </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }
  
}

export default Nav;
