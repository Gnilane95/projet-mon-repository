import React from 'react'
import { Link } from "react-router-dom";

export default function CardPortfolio() {
  return (
    <div className="px-24 py-20">
      <h1 className="text-xxl text-primary-dark font-black">Mes services</h1>
      <div className="mt-14">
        <ul className="flex gap-16 text-accent-dark font-medium ">
          <li>
            <Link to="" className="hover:text-primary-dark">
              Tous
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-primary-dark">
              React
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-primary-dark">
              PHP/Laravel
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex mt-14 gap-20">
        <div>
          <img src="img/projet1.PNG" alt="" />
          <p className="text-center p-3 text-primary-dark font-bold uppercase">
            Projet 1
          </p>
        </div>
        <div>
          <img src="img/projet2.PNG" alt="" />
          <p className="text-center pt-3 text-primary-dark font-bold uppercase">
            Projet 2
          </p>
        </div>
      </div>
    </div>
  );
}

