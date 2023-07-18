import React from "react";

const MainKittyGoal = ({ data }) => {
  const totalKitty = (data) => {
    let tot = 0;
    if (data.amount.length !== 0) {
      for (let i = 0; i < data.amount.length; i++) {
        tot += parseInt(data.amount[i]);
      }
    }
    return tot;
  };
  return (
    <div className="kittyContent_goal">
      <div className="kittyContent_slogan">{data.slogan}</div>
      <div className="kittyContent_chart">
        {totalKitty(data)}/ {data.goal}
      </div>
      <div className="kittyContent_donationBtn">DONATE</div>
    </div>
  );
};

export default MainKittyGoal;
