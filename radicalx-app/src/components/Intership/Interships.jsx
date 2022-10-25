import React from "react";
// components
import { Button, Container } from "react-bootstrap";
//style
import "./intership.css";
import addsgv from "../../assets/svg/add-square.svg";
import IntershipsDetails from "../Interships_details/Interships_details";

function Interships() {
  return (
    <Container className="intership_container">
      <div className="intership_header">
        <h3>Interships</h3>
        <Button>
          <img src={addsgv} />
          Create New Intership
        </Button>
      </div>
      <div className="container intership_insights">
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
    <Button>This Week</Button>
    <Button>This Month</Button>
   </div>
   <div className="days_selector">Select Days</div>
</div>
        </div>
      </div>
      <div className="interships_details">
        <IntershipsDetails />
      </div>
    </Container>
  );
}

export default Interships;
