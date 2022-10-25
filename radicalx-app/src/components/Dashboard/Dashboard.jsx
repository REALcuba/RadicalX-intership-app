import React from "react";
import { Link } from "react-router-dom";

// import { Button } from "react-bootstrap";
// import { UserAuth } from "../components/context/AuthContext";
import Logo from "../../assets/svg/RadicallX-Black-Logo 1.svg";
import DasboardLogo from "../../assets/svg/dashboard-3.svg";
import medalStar from "../../assets/svg/medal-star.svg";
import book from "../../assets/svg/book.svg";
import briefcase from "../../assets/svg/briefcase.svg";
import setting from "../../assets/svg/setting-2.svg";
import rectangle from "../../assets/svg/Rectangle.svg";

import "./dashboard.css";

function Dashboard() {
  return (
    <div >
    <div className="nav_container ">
      <div className=" nav_board ">
          <img className="nav_item logo" src={Logo} alt="Logo" />
      
      <div className="nav_menu">
        <div className="nav_item">
        <img src={DasboardLogo}/>
          <Link className="nav-link text" to="/dashboard">
            Dashboard
          </Link>
        </div>
        <div className="nav_item" >
          <img src={medalStar} alt="" />
          <Link className="nav-link text" to="#">
            Apprenteships
          </Link>
        </div>
        <div className="nav_item">
        <img src={book} alt="" />
          <Link className="nav-link text" to="/interships">
            Interships
          </Link>
        </div>
        <div className="nav_item">
        <img src={briefcase}/>
          <Link className="nav-link text" href="#">
           Jobs
          </Link>
        </div>
        <div className="nav_item">
        <img src={setting}/>
          <Link className="nav-link text" href="#">
            Settings
          </Link>
        </div>
      </div>
      </div>
      <div className="adams">
      <img src={rectangle}/>
          <Link className="nav-link text" href="#">
            Adam Scott
          </Link>
      </div>
    </div>
    {/* intership board */}
    {/* <div className="intership_conatiner">
      <div><h3>Intership</h3></div>
      <Button >Create new intership</Button>
    </div> */}
    </div>
  );
}

export default Dashboard;
