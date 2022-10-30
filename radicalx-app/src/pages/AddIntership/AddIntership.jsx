import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/svg/arrow-left.svg";
import arrowRight from "../../assets/svg/arrow-right.svg";
//style
import "./add_interships.css";

function AddIntership() {
  return (
    <Container fluid className="add_intership_container">
      <div className="nav_intership container d-flex justify-content-between">
        <Link to="/interships" className="back_arrow ">
          <img src={arrowLeft} alt="" />
          Back
        </Link>
        <div className="add_intership">Add New Intership</div>
        <div className="next_step">
          <span className="next">Continue to Next Step
          <img src={arrowRight} alt=""  />
          </span>
          
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
}

export default AddIntership;
