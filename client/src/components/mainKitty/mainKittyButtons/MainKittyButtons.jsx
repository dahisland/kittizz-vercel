import React from "react";
import { MdDelete } from "react-icons/md";
import { LuEdit } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { deleteOneKitty } from "../../../api/callsAPI";

const MainKittyButtons = ({ data, functionOpenUpdateModale }) => {
  const navigate = useNavigate();

  const deleteKitty = async (id) => {
    const res = await deleteOneKitty(id);
    if (res === 200) {
      navigate("/");
    }
  };
  return (
    <div className="kittyContent_buttons">
      <div className="modifyKitty_btn" onClick={functionOpenUpdateModale}>
        <p>Kitty parameters</p>
        <LuEdit />
      </div>
      <div className="modifyKitty_btn" onClick={() => deleteKitty(data._id)}>
        <p>Delete kitty</p>
        <MdDelete />
      </div>
    </div>
  );
};

export default MainKittyButtons;
