import React from "react";
import CreateKittyBtn from "../createKittyBtn/CreateKittyBtn";

const MainHeader = ({ title, functionOnClick }) => {
  return (
    <div className="main_header">
      <h2>{title}</h2>
      <CreateKittyBtn functionOnClick={functionOnClick} />
    </div>
  );
};

export default MainHeader;
