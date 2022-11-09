import React, { useState } from "react";
import { Container } from "react-bootstrap";
//style
import "./description.css"

function Description() {
 const[description, setDescription] = useState("");

 const handleChange =(event)=>{
  event.preventDefault();
  setDescription(event.target.value);
  console.log(description)
 }

  return (
    <Container className="description input-group ">
      <h6 className="data_text">Description</h6>
     < input type="text" className="intership_descriptio rounded input-group-text"
      placeholder="Intership Description" onChange={ handleChange}/>

    </Container>
  );
}

export default Description;
