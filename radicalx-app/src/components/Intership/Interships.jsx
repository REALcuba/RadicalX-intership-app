import React from "react";
// components
import { Button } from "react-bootstrap";
//style
import "./intership.css";
import addsgv from "../../assets/svg/add-square.svg"

function Interships() {
  return (
    <div className=" intership_container">
        <div className="intership_header">
      <h3>Interships</h3>
      <Button><img src={addsgv}/>Create New Intership</Button>
        </div>
        <div className="container intership_insights">

        </div>
    </div>
  );
}

export default Interships;
