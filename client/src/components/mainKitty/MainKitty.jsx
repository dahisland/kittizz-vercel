import React from "react";
import MainHeader from "../mainHeader/MainHeader";
import MainKittyGoal from "./mainKittyGoal/MainKittyGoal";
import MainKittyButtons from "./mainKittyButtons/MainKittyButtons";

const MainKitty = ({ data, functionOnClick, functionOpenUpdateModale }) => {
  return (
    <div className="kittyMain">
      <MainHeader title={data.title} functionOnClick={functionOnClick} />
      <div className="kitty_content">
        <div className="kittyContent_header">
          <picture className="kittyContent_img">
            <img src={data.img} alt={data.title} />
          </picture>
          <MainKittyGoal data={data} />
        </div>

        <div className="kittyContent_main">
          <div className="kittyContent_details">{data.details}</div>
          <MainKittyButtons
            data={data}
            functionOpenUpdateModale={functionOpenUpdateModale}
          />
        </div>
      </div>
    </div>
  );
};

export default MainKitty;
