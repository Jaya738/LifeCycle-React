import React from 'react';

function Description(props) {
  return (
    <div>
       <center><p style={{fontStyle:"bold",fontSize:"35px",color:"white"}}>{props.stage.label}</p></center>
      <p style={{color:"white"}}>{props.stage.description}</p>
    </div>
  );
}

export default Description;
