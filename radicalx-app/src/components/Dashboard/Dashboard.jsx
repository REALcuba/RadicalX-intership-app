import React, { useState } from "react";
import { Link } from "react-router-dom";
//components
import Interships from "../Intership/Interships";

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
  const [board, setBoard] = useState("interships");
  // const handleClick = (e) => {
  //   setboard(<Interships/>)
  // };
  return (
    <div>
      <div className="nav_container este">
        <div className=" nav_board ">
          <img className="nav_item logo" src={Logo} alt="Logo" />
          <div className="nav_menu">
            <div className="nav_item">
              <img src={DasboardLogo} />
              <Link className="nav-link text" to="/dashboard">
                <h5>Dashboard</h5>
              </Link>
            </div>
            <div className="nav_item">
              <img src={medalStar} alt=" " />
              <Link className="nav-link text" to="#">
                <h5>Apprenteships</h5>
              </Link>
            </div>
            <Link
              className="nav_item"
              to="/interships"
              // onClick={()=> setBoard(<Interships/>)}
            >
              <img src={book} alt=" " />
              <div className="nav-link text">
                <h5>Interships</h5>
              </div>
            </Link>
            <div className="nav_item">
              <img src={briefcase} />
              <Link className="nav-link text" href="#">
                <h5>Jobs</h5>
              </Link>
            </div>
            <div className="nav_item">
              <img src={setting} />
              <Link className="nav-link text" href="#">
                <h5>Settings</h5>
              </Link>
            </div>
          </div>
        </div>
        <div className="adams ">
          <img src={rectangle} />
          <Link className="nav-link text " href="#">
            <h5>Adam Scott</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
