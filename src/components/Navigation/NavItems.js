import React from 'react'
import { Link } from "react-router-dom";

export default function NavItems({ linkItem, titleItem }) {
  return (
    <li>
      <Link
        to={linkItem}
        className="  block py-4 pr-4 pl-3 text-white bg-primary-dark "
        aria-current="page"
      >
        {titleItem}
      </Link>
    </li>
  );
}
