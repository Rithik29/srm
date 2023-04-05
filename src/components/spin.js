import React from "react";
import { DotLoader } from "react-spinners";
import './spin.css'

const DotSpinner = () => {
  return (
    <div className="dot-spinner">
      <DotLoader color={"#36D7B7"}
      size={100}
      />
      
    </div>
  );
  
};

export default DotSpinner;