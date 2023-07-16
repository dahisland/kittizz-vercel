import React, { useContext } from "react";
import { cardContext } from "./CardProvider";
import { NavLink } from "react-router-dom";

const CardDescription = () => {
  const { data } = useContext(cardContext);

  return (
    <NavLink to={"/kitty/" + data._id}>
      <picture className="card-img">
        <img src={data.img} alt={data.title} />
        <div className="card-description">{data.description}</div>
      </picture>
    </NavLink>
  );
};

export default CardDescription;
