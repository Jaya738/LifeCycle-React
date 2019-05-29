import React from 'react';
import {Button,ButtonGroup,ButtonToolbar } from 'reactstrap';

function Nav() {
  return (
    <div>
      <ButtonToolbar>
        <ButtonGroup style={{height:"88px",width:"1292px"}}>
          <Button color="danger"> <p style={{fontSize:"200%"}}>Stage1</p></Button>
          <Button color="danger"> <p style={{fontSize:"200%"}}>Stage2</p></Button>
          <Button color="danger"> <p style={{fontSize:"200%"}}>Stage3</p> </Button>
          <Button color="danger"> <p style={{fontSize:"200%"}}>Stage4</p> </Button>
          <Button color="danger"> <p style={{fontSize:"200%"}}>Stage5</p> </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

export default Nav;
