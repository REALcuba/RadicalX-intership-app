import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/svg/arrow-left.svg";
import arrowRight from "../../assets/svg/arrow-right.svg";
import untickCircle from "../../assets/svg/untick-circle.svg";
import menu from "../../assets/svg/menu.svg";
import arrowRightData from "../../assets/svg/arrow-right-data.svg";
import add2 from "../../assets/svg/add-square2.svg";
//style
import "./add_interships.css";

function AddIntership() {
  return (
    <Container fluid className="add_intership_container nav">
      <div className="nav_intership container d-flex justify-content-between">
        <Link to="/interships" className="back_arrow ">
          <img src={arrowLeft} alt="" />
          Back
        </Link>
        <div className="add_intership">
          <h3>Add New Intership</h3>
        </div>
        <div className="next_step">
          <button className="next">
            Continue to Next Step
            <img src={arrowRight} alt="" />
          </button>
        </div>
      </div>
      <ul className="nav intership_steps">
        <li className="nav-item ">
          <img src={untickCircle} className="mx-2" />
          Intertship description
        </li>
        <li className="nav-item">
          <img src={untickCircle} className="mx-2" />
          Intership Guide
        </li>
        <li className="nav-item">
          <img src={untickCircle} className="mx-2" />
          Surveys
        </li>
        <li className="nav-item">
          <img src={untickCircle} className="mx-2" />
          Settings
        </li>
      </ul>
      <div className="intership_data ">
        <div className=" d-flex">
          <img src={menu} className="mx-2" alt="" />
          <div className="data justify-content-between">
            Cathegory
            <img src={arrowRightData} alt="" />
          </div>
        </div>
        <div className=" d-flex ">
          <img src={menu} className="mx-2" alt="" />
          <div className="data justify-content-between">
            Description
            <img src={arrowRightData} alt="" />
          </div>
        </div>
        <div className=" d-flex">
          <img src={menu} className="mx-2" alt="" />
          <div className="data justify-content-between">
            Location
            <img src={arrowRightData} alt="" />
          </div>
        </div>
        <div className=" d-flex">
          <img src={menu} className="mx-2" alt="" />
          <div className="data justify-content-between">
            Benefits <img src={arrowRightData} alt="" />
          </div>
        </div>
        <div className=" d-flex">
          <img src={menu} className="mx-2" alt="" />
          <div className="data justify-content-between">
            Intro Video
            <img src={arrowRightData} alt="" />
          </div>
        </div>
        <div className=" d-flex">
          <img src={menu} className="mx-2" alt="" />
          <div className="data justify-content-between">
            Mentor Details
            <img src={arrowRightData} alt="" />
          </div>
        </div>
        <div className=" d-flex">
          <img src={menu} className="mx-2" alt="" />
          <div className="data justify-content-between">
            Recommendend Role
            <img src={arrowRightData} alt="" />
          </div>
        </div>
        <div className=" d-flex">
          <img src={menu} className="mx-2" alt="" />
          <div className="data justify-content-between">
            Web Links & Resources <img src={arrowRightData} alt="" />
          </div>
        </div>
        <div className="add_more justify-content-center ">
          {" "}
          <div className="d-flex w-25 justify-content-around">
            <img src={add2} />
            Add More
          </div>{" "}
        </div>
      </div>
      <div></div>
    </Container>
  );
}

export default AddIntership;
