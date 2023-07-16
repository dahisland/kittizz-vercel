import React, { useContext } from "react";
import { cardContext } from "./CardProvider";
import { BsBalloonHeartFill } from "react-icons/bs";

const CardFooter = () => {
  const { data } = useContext(cardContext);

  return (
    <footer className="card-footer">
      <p className="cardFooter-author">{"By " + data.author}</p>
      <div className="card-likes">
        <p>{data.likers.length}</p>
        <BsBalloonHeartFill />
      </div>
    </footer>
  );
};

export default CardFooter;
