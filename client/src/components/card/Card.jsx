import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="kitty-card">
      <h3>{data.title}</h3>
      <NavLink to={"/kitty/" + data._id}>
        <div className="card-img">
          <img src={data.img} alt={data.title} />
          <div className="card-description">{data.description}</div>
        </div>
      </NavLink>

      <footer className="card-footer">
        <p>{"By " + data.author}</p>
        <button className="card-likes">{data.likers.length}</button>
      </footer>
    </div>
  );
};

export default Card;
