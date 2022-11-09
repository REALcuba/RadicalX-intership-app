import React, {useState}from "react";
import { Container } from "react-bootstrap";

//style
import "./description.css";

function Description() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
    console.log(text);
  };

  return (
    <Container className="description input-group ">
      <h6 className="data_text">Description</h6>
      <input
        type="text"
        className="intership_descriptio d-flex h-50 rounded input-group-text"
        placeholder="Intership Description"
        onChange={handleChange}
        onKeyPress={(e)=>{
         e.key !== 'Enter'? <div>{text}</div>
            :console.log(e,'enter press here! ')
          
          
        }}
      />
    </Container>
  );
}

export default Description;
