import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteOneKitty } from "../../api/callsAPI";

const DeleteKittyModale = ({ closeModaleFunction, data }) => {
  const navigate = useNavigate();

  const deleteKitty = async (id) => {
    const res = await deleteOneKitty(id);
    if (res === 200) {
      navigate("/");
    }
  };

  return (
    <div className="modale deleteKitty_modale">
      <div className="modale_innerContainer">
        <div className="modale_content">
          <p>Permanently delete this kitty ?</p>
          <div className="deleteKitty_buttons">
            <button onClick={closeModaleFunction}>Cancel</button>
            <button onClick={() => deleteKitty(data._id)}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteKittyModale;
