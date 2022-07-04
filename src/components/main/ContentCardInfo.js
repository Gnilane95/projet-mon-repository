import React from 'react'

export default function ContentCardInfo({src, label, title}) {
  return (
    <div>
      <div className="flex pl-11 items-center pt-4">
        <img src={src} alt="" />
        <p className="text-sm pl-4">
          <span className="text-accent-lightest">{label} </span>
          <span className="text-accent-light">{title}</span>
        </p>
      </div>
    </div>
  );
}
