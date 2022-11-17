import React, { useState } from "react";
import { Container } from "react-bootstrap";

//style
import "../Description/description.css";
import location from "../../assets/svg/location.svg";
import useHandleChange from "../../assets/HandleChange/HandleChange";

function Location() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
    console.log(text);
  };

  return (
    <Container className="location">
      <h6 className="data_text">Location</h6>
      <div className="input-group">
        <span className=" input-group-text">
          <img src={location} />
        </span>
        <input
          type="text"
          className="intership_description d-flex rounded input-group-text"
          placeholder="Select Location"
          onChange={handleChange}
          onKeyPress={(e) => {}}
        />
        <button
          type="button"
          className="btn dropdown-toggle bg-light rounded input-group-text"
          data-bs-toggle="dropdown"
        ></button>
      </div>
    </Container>
  );
}

export default Location;
