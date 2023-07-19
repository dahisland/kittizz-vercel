import React from "react";
import { MdDelete } from "react-icons/md";
import { LuEdit } from "react-icons/lu";

const MainKittyButtons = ({
  functionOpenUpdateModale,
  functionOpenDeleteModale,
}) => {
  return (
    <div className="kittyContent_buttons">
      <div className="modifyKitty_btn" onClick={functionOpenUpdateModale}>
        <p>Kitty parameters</p>
        <LuEdit />
      </div>
      <div className="modifyKitty_btn" onClick={functionOpenDeleteModale}>
        <p>Delete kitty</p>
        <MdDelete />
      </div>
    </div>
  );
};

export default MainKittyButtons;
