import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Description from "../../components/Description/Description";

import arrowLeft from "../../assets/svg/arrow-left.svg";
import arrowRight from "../../assets/svg/arrow-right.svg";
import untickCircle from "../../assets/svg/untick-circle.svg";
import menu from "../../assets/svg/menu.svg";
import arrowRightData from "../../assets/svg/arrow-right-data.svg";
import add2 from "../../assets/svg/add-square2.svg";
//style
import "./add_interships.css";

function AddIntership() {
  const [clicked, setclicked]= useState(false);
  // const onclick = () => {
  //   console.log("testing");
  //   return <Categories />;
  // };
  return (
    <Container fluid className="add_intership_container bg-light ">
      <div className="nav_intership d-flex justify-content-between">
        <Link to="/interships" className="back_arrow ">
          <img src={arrowLeft} alt=" "  />
          Back
        </Link>
        <div className="add_intership">
          <h3 className="d-flex">Add New Intership</h3>
        </div>
        <div className="next_step">
          <button className="next">
            Continue to Next Step
            <img src={arrowRight} alt=" " />
          </button>
        </div>
      </div>
      <ul className="nav intership_steps">
        <li className="nav-item ">
          <img src={untickCircle} className="mx-2"/>
          Intertship description
        </li>
        <li className="nav-item text-muted">
          <img src={untickCircle} className="mx-2" />
          Intership Guide
        </li>
        <li className="nav-item text-muted">
          <img src={untickCircle} className="mx-2" />
          Surveys
        </li>
        <li className="nav-item text-muted">
          <img src={untickCircle} className="mx-2" />
          Settings
        </li>
      </ul>
      <div className="details container">
        <div className="intership_data ">
          <div className=" d-flex">
            <img src={menu} className="mx-2" alt=" " />
            <div
              className="data justify-content-between"
             
            >
             <h5 className="data_text">Category</h5> 
              <img src={arrowRightData} alt=" "  onClick={() => {
                setclicked(true)
                console.log("testing categories");
                return clicked ? <Categories />: "dashboard";
              }} />
            </div>
          </div>
          <div className=" d-flex ">
            <img src={menu} className="mx-2" alt=" " />
            <div className="data justify-content-between">
            <h5 className="data_text" >Description </h5>
              <img src={arrowRightData} alt=" "  onClick={() => {
                console.log("testing description");
               
                return <Description />
               }} />
            </div>
          </div>
          <div className=" d-flex">
            <img src={menu} className="mx-2" alt=" " />
            <div className="data justify-content-between">
            <h5 className="data_text">Location</h5>
              <img src={arrowRightData} alt=" " />
            </div>
          </div>
          <div className=" d-flex">
            <img src={menu} className="mx-2" alt="" />
            <div className="data justify-content-between">
            <h5 className="data_text">Benefits</h5> <img src={arrowRightData} alt="" />
            </div>
          </div>
          <div className=" d-flex">
            <img src={menu} className="mx-2" alt="" />
            <div className="data justify-content-between">
            <h5 className="data_text">Intro Video</h5>
              <img src={arrowRightData} alt="" />
            </div>
          </div>
          <div className=" d-flex">
            <img src={menu} className="mx-2" alt="" />
            <div className="data justify-content-between">
            <h5 className="data_text">Mentor Details</h5>
              <img src={arrowRightData} alt="" />
            </div>
          </div>
          <div className=" d-flex">
            <img src={menu} className="mx-2" alt="" />
            <div className="data justify-content-between">
            <h5 className="data_text">Recommendend Role</h5>
              <img src={arrowRightData} alt="" />
            </div>
          </div>
          <div className=" d-flex">
            <img src={menu} className="mx-2" alt="" />
            <div className="data justify-content-between">
            <h5 className="data_text">Web Links & Resources</h5>  <img src={arrowRightData} alt="" />
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
        {/* content */}
        <div className="content mb-3">
        <Categories />
          {/* <Description/> */}
        </div>
      </div>
    </Container>
  );
}

export default AddIntership;
