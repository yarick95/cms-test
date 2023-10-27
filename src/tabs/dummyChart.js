import React from "react";

const DummyChart = () => {
  const data = [25, 30, 45, 60, 10, 65, 75];

  const maxValue = Math.max(...data);

  const height = 200;
  const width = 700;

  const barHeight = (value) => {
    return (value / maxValue) * height;
  };

  return (
    <svg
      width={width}
      height={height}
      style={{ border: "1px solid black", marginTop: "20px" }}
    >
      {data.map((value, index) => {
        const barWidth = width / data.length - 2;
        const currentBarHeight = barHeight(value);
        return (
          <rect
            key={index}
            x={index * (barWidth + 2)}
            y={height - currentBarHeight}
            width={barWidth}
            height={currentBarHeight}
            fill="blue"
          />
        );
      })}
    </svg>
  );
};

export default DummyChart;
