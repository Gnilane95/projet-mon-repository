import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBars({percentage, title}) {
  return (
    <div style={{ width: 150, height: 150 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#a5a5a5",
          opacity: 0.3,
          textColor: "#fff",
          pathColor: "#8583e1",
          trailColor: "transparent",
        })}
      />
      <p className="uppercase text-primary-dark font-bold text-center pt-7"> {title} </p>
    </div>
  );
}
