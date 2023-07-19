export const getDataChart = (amount, goal) => {
  return {
    labels: ["", ""],
    datasets: [
      {
        label: "",
        data: [amount, goal],
        backgroundColor: ["rgba(116, 32, 98, 1)", "rgba(223, 223, 223, 1)"],
        borderWidth: 1,
        borderAlign: "inner",
        borderColor: "white",
        radius: 80,
        rotation: -15,
        cutout: "68%",
        circumference: 355,
      },
    ],
  };
};

export const options = {
  animation: { animateScale: true },
  plugins: {
    legend: {
      display: false,
    },
    title: { display: false },
    tooltip: { enabled: false },
  },
};
