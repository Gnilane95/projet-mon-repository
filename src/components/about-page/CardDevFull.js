import React from 'react'
import ProgressBars from './ProgressBars'

export default function CardRight() {
  const percentage = [
    {
      percentage: 75,
      title: "Intuition",
    },
    {
      percentage: 83,
      title: "Créativity",
    },
    {
      percentage: 25,
      title: "Pure Luck",
    },
    {
      percentage: 95,
      title: "Awesomeness",
    },
  ];
  return (
    <div className="px-24 py-20">
      <span className="text-accent-dark text-xl font-medium leading-none">
        Développeur full stack
        <h1 className="text-xxl text-primary-dark font-black">Agathe Diouf</h1>
      </span>
      <div className="pb-16">
        <h2 className="pt-16 text-xl text-primary-dark font-semibold">
          Description
        </h2>
        <p className="pt-10 text-accent-dark font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab
          aspernatur eligendi quisquam praesentium magni maxime modi, asperiores
          officiis, alias, recusandae a. Corporis animi, tempora assumenda
          magnam doloribus et veritatis dolorum reprehenderit molestias cum
          facere sint odio ullam error. Eum aliquid quam vel neque dolores. Odit
          excepturi deserunt incidunt quae non praesentium in sapiente maiores
          possimus? Beatae aut sed nobis.
        </p>
      </div>
      <div className="flex justify-between items-center">
        {percentage.map((bar) => (
          <ProgressBars
            className="bars"
            percentage={bar.percentage}
            title={bar.title}
          />
        ))}
      </div>
    </div>
  );
}
