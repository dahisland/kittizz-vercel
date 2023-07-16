import React, { createContext } from "react";
import Card from "./Card";

export const cardContext = createContext({});

const CardProvider = (props) => {
  const value = props;
  return (
    <cardContext.Provider value={value}>
      <Card />
    </cardContext.Provider>
  );
};

export default CardProvider;
