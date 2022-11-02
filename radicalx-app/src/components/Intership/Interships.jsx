import React from "react";
import { Link } from "react-router-dom";
// components
import { Button, Container } from "react-bootstrap";
import AddIntership from "../../pages/AddIntership/AddIntership";
//style
import "./intership.css";
import addsgv from "../../assets/svg/add-square.svg";
import calendarIcon from "../../assets/svg/calendar-2.svg";
import funnel from "../../assets/svg/Funnel.svg"
import IntershipsDetails from "../Interships_details/Interships_details";

function Interships() {
  return (
    <div className="intership_container">
      <div className="intership_header">
        <h3>Interships</h3>
        <Link className="add_btn " to='/addIntership'>
          <img className="add_icon" src={addsgv} />
          <h3 className="add_intership_text">Create New Intership</h3>
        </Link>
      </div>
      <div className=" intership_insights">
        <div className="insights_container">
          <h4 className="insight_title">Interships Insights</h4>
          <article className="insight_text">
            In the eighteenth century the German philosopher Immanuel Kant
            developed a theory of knowledge in which knowledge about space can
            be both a priori and synthetic.
          </article>
        </div>
        <div className="insights_filter">
          <div className="filter_bar">
            <div className="filter">
              <button type="button" className="filter_btn" >This Week</button>
              <button type="button" className="filter_btn">This Month</button>
            </div>
            <div className="days_selector align-content-center">
              <img src={calendarIcon} alt="" /> Select Days
            </div>
          </div>
          <div className="funnel">
            <img src={funnel} alt="" />
          </div>
        </div>
      </div>
      <div className="interships_details">
        <IntershipsDetails />
      </div>
    </div>
  );
}

export default Interships;
