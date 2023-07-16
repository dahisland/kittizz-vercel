import React, { useContext } from "react";
import { cardContext } from "./CardProvider";
import { BsBalloonHeartFill } from "react-icons/bs";
import { likeOneKitty, unlikeOneKitty } from "../../api/callsAPI";

const CardFooter = () => {
  const { data, setDataIsUpdated, userIP } = useContext(cardContext);

  async function getIpClient(data) {
    if (data.likers.find((el) => el === userIP) === undefined) {
      await likeOneKitty(data._id, userIP);
      setDataIsUpdated(true);
    } else {
      await unlikeOneKitty(data._id, userIP);
      setDataIsUpdated(true);
    }
  }

  return (
    <footer className="card-footer">
      <p className="cardFooter-author">{"By " + data.author}</p>
      <div
        className={
          data.likers.find((el) => el === userIP) === undefined
            ? "card-likes card-likes--unliked"
            : "card-likes card-likes--liked"
        }
        onClick={() => getIpClient(data)}
      >
        <p>{data.likers.length}</p>
        <BsBalloonHeartFill />
      </div>
    </footer>
  );
};

export default CardFooter;
