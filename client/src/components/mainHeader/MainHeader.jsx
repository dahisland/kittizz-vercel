import React from "react";
import CreateKittyBtn from "../createKittyBtn/CreateKittyBtn";

const MainHeader = ({ title }) => {
  return (
    <div className="main_header">
      <h2>{title}</h2>
      <CreateKittyBtn />
    </div>
  );
};

export default MainHeader;
