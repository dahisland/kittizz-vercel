import React from "react";
import { getDataChart, options } from "../../../utils/kittyChartData";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const MainKittyGoal = ({ kittyData, functionOpenDonateModale }) => {
  const totalKitty = (data) => {
    let tot = 0;
    if (data.amount.length !== 0) {
      for (let i = 0; i < data.amount.length; i++) {
        tot += parseInt(data.amount[i]);
      }
    }
    return tot;
  };

  const amountToGoal = (data) => {
    let tot = data.goal - totalKitty(data);
    if (tot <= 0) {
      tot = 0;
    }
    return tot;
  };

  return (
    <div className="kittyContent_figures">
      <div className="kittyContent_slogan">{kittyData.slogan}</div>
      <div className="kittyContent_chartContainer">
        <div className="kittyContent_chart">
          <Doughnut
            data={getDataChart(totalKitty(kittyData), amountToGoal(kittyData))}
            options={options}
            width={"190px"}
            height={"190px"}
          />
          <div className="chart_amount">
            <p>{totalKitty(kittyData) + " $"}</p>
          </div>
        </div>
        <div className="kittyContent_goal">
          GOAL
          <br /> {kittyData.goal + " $"}
        </div>
      </div>

      <div className="kittyContent_donationBtn">
        <button onClick={functionOpenDonateModale}>DONATE</button>
      </div>
    </div>
  );
};

export default MainKittyGoal;
