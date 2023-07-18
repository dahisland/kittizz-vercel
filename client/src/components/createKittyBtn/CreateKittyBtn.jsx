import React from "react";
import { RiAddCircleFill } from "react-icons/ri";

const CreateKittyBtn = ({ functionOnClick }) => {
  return (
    <div className="createKitty_btn" onClick={functionOnClick}>
      <RiAddCircleFill />
      <p>Create a kitty</p>
    </div>
  );
};

export default CreateKittyBtn;
