import React, { useContext } from "react";
import { cardContext } from "./CardProvider";
import CardDescription from "./CardDescription";
import CardFooter from "./CardFooter";

const Card = () => {
  const { data } = useContext(cardContext);

  return (
    <div className="kitty-card">
      <h3>{data.title}</h3>
      <CardDescription />
      <CardFooter />
    </div>
  );
};

export default Card;
