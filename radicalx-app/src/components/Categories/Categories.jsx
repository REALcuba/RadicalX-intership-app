import React, { useState } from "react";
import { Container } from "react-bootstrap";
import closeIcon from "../../assets/svg/close-x.svg";
import searchIcon from "../../assets/svg/search-normal.svg";
//style
import "./categories.css";

function Categories(props) {
  const [search, setSearch] = useState("");
  const content = document.getElementsByClassName("content");

  return (
    
      <Container>
      <h3>Category</h3>
      <div className="input-group bg-light border rounded-4">
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
            return {search}
          }}
          onClick={() => {
            return <div className="rounded-4 category justify-content-center px-md-4 py-md-1">
            <h6 className=" d-flex align-item-center">
              {search} <img src={closeIcon} />
            </h6>
          </div>
          }}
          className=" search_bar form-control bg-light border-0 rounded-4"
          placeholder="Search Category"
        />
        <img src={searchIcon} alt="" className="pe-2" />
      </div>

      <div className="d-flex categories">
        <div className="rounded-4 category justify-content-center px-md-4 py-md-1">
          <h6 className=" d-flex align-item-center">
            {search} 
          </h6>
          <img src={closeIcon} />
        </div>
        <div className="rounded-4 category justify-content-center px-md-4 py-md-1">
          <h6 className=" d-flex align-item-center">
            Technology <img src={closeIcon} />
          </h6>
        </div>
      </div>
    </Container>
  );
}

export default Categories;
