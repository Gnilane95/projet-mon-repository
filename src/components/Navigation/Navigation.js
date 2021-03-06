import React from 'react'
import { Link } from "react-router-dom";
import NavItems from './NavItems';

export default function Navigation() {
  return (
    <nav className="bg-white border-gray-200 pt-5 rounded ">
      <div className=" flex flex-wrap gap-10 items-center mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-3xl text-primary-dark font-black whitespace-nowrap">
            Agathe<span className="text-primary-light">.</span>
            <span className="uppercase">cv</span>
          </span>
        </Link>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center ml-3 text-sm text-gray-500 rounded-lg md:hidden  pr-0"
          aria-controls="mobile-menu"
          aria-expanded="false"
        > menu
          <span className="sr-only">Menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              // d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-0 font-light md:mt-0 md:text-md">
            <NavItems
              linkItem="/"
              titleItem="About"
            />
            <NavItems linkItem="/skills" titleItem="Skills" />
            <NavItems linkItem="/services" titleItem="Services" />
            <NavItems linkItem="/portfolio" titleItem="Portfolio" />
            <NavItems linkItem="/testimonials" titleItem="Testimonials" />
            <NavItems linkItem="/contact" titleItem="Contact" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
