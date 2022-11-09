import React, {useState}from "react";
import { Container } from "react-bootstrap";

//style
import "../Description/description.css";

function Location() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
    console.log(text);
  };

  return (
    <Container className="description input-group ">
      <h6 className="data_text">Location</h6>
      <input
        type="text"
        className="intership_descriptio d-flex h-50 rounded input-group-text"
        placeholder="Select Location"
        onChange={handleChange}
        onKeyPress={(e)=>{
         e.key !== 'Enter'? <div>{text}</div>
            :console.log(e,'enter press here! ')
          
          
        }}
      />
    </Container>
  );
}

export default Location;
