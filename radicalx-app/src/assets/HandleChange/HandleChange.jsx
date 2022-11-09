import React, { useState } from "react";


const useHandleChange =()=>{
  const [text, setText] = useState("");

   const onChange =(e)=>{
      setText(e.target.value);
      // console.log(e.target.value);
    
   }
   return {onChange,text, setText};
   }
 
;
export default useHandleChange;