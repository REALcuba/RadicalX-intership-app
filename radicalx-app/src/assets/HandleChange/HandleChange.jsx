import React, { useState } from "react";



const HandleChange =(event)=>{
       const [text, setText] = useState("");
     event.preventDefault();
  setText(event.target.value);
  console.log(text);
   }
 
;
export default HandleChange;