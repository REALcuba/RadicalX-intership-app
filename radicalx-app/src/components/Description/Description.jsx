import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useHandleChange from "../../assets/HandleChange/HandleChange";

//style
import "./description.css";
import closeIcon from "../../assets/svg/close-x.svg";


function Description({ title, placeHolder }) {
  const [description, setDescription] = useState("");
  const { text, setText, onChange } = useHandleChange();

  return (
    <Container className="description  ">
      <h6 className="data_text">{title}</h6>
      <input
        type="text"
        value={text}
        className="intership_descriptio d-flex h-50 rounded input-group-text"
        placeholder={placeHolder}
        onChange={onChange}
        onKeyDown={(e) => {
          if ({ text } !== "" && e.key === "Enter") {
            setDescription(text);
            setText("");
            // console.log(e.key);
          }

        }}
      />
      <div className="d-flex categories">
        {description.trim(() => {
          return (
            <div className=" d-flex rounded-4 category justify-content-center px-md-3 py-md-1" >
              {/* <h6 className=" d-flex align-item-center m-0">{category}</h6> */}
             {description} 
              {/* <img src={closeIcon} /> */}
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Description;
