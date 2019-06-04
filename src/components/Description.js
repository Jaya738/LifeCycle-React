import React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';


function Description(props) {
  return (
    <div>
      <p>{props.val}</p>
      {props.val ? <center><p style={{fontWeight:"bold",fontSize:"35px",color:"white",fontFamily:"timeburner"}}>{props.stage.label}</p></center> : <center><p style={{fontWeight:"bold",fontSize:"35px",color:"white",fontFamily:"timeburner"}}>{props.stage.labelTel}</p></center>}
        {props.val ? <p className="overflow-auto" style={{color:"white",fontFamily:"timeburner"}}>{props.stage.description}</p> : <p className="overflow-auto" style={{color:"white",fontFamily:"timeburner"}}>{props.stage.descriptionTel}</p>}
    </div>
  );
}

export default Description;
