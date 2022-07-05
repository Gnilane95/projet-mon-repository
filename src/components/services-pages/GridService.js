import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function GridService({src, title, description}) {
  return (
    <div className='flex '>
      <div>
        <img src={src} alt="" className='w-56'/>
      </div>
      <div className='ml-4'>
        <h2 className="text-primary-dark font-bold text-lg">{title}</h2>
        <p className="text-accent-dark font-medium text-sm">{description}</p>
      </div>
    </div>
  );
}
