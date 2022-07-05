import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBars({percentage, title}) {
  return (
    <div style={{ width: 150, height: 150 }}>
      <CircularProgressbar
        className="font-black text-xl gap-12"
        value={percentage}
        text={`${percentage}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#fff",
          opacity: 0.3,
          textColor: "#100f3a",
          pathColor: "#8583e1",
          trailColor: "#a5a5a5",
        })}
      />
      <p className="uppercase text-primary-dark font-bold text-center pt-7">
        {" "}
        {title}{" "}
      </p>
    </div>
  );
}
