import React, { useState } from "react";
import { Container } from "react-bootstrap";
import closeIcon from "../../assets/svg/close-x.svg";
import searchIcon from "../../assets/svg/search-normal.svg";
import useHandleChange from "../../assets/HandleChange/HandleChange";
//style
import "./categories.css";

function Categories(props) {
  const [list, setList] = useState(["development", "technology"]);
  const {text, setText, onChange } = useHandleChange();

  return (
    <Container>
      <h3>Category</h3>
      <div className="input-group bg-light border rounded-4">
        <input
          type="text"
          value={text}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (!list.includes(text)) {
                setList([...list, text]);
                setText("");
              } else {
                alert("category is included");
              }
            }
            // console.log(e.key);
          }}
          className=" search_bar form-control bg-light border-0 rounded-4"
          placeholder="Search Category"
        />
        <img src={searchIcon} alt="" className="pe-2" />
      </div>

      <div className="d-flex categories">
        {list.map((category) => {
          return (
            <div className=" d-flex rounded-4 category justify-content-center px-md-3 py-md-1" key={category}>
              <h6 className=" d-flex align-item-center m-0">{category}</h6>
              <img src={closeIcon} />
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Categories;
