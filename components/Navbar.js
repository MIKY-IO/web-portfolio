import { BsFillMoonStarsFill } from "react-icons/bs";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar(props) {
  const { onDarkModeChange } = props;
  const { isDark } = props;

  return (
    <>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl dark:text-white">MIKY-IO</h1>
        <ul className="flex items-center">
          <li>
            <button
              onClick={() => {
                onDarkModeChange(!isDark);
              }}
            >
              <BsFillMoonStarsFill className="cursor-pointer text-2xl dark:text-yellow-300" />
            </button>
          </li>
          <li>
            <Link
              href="/#contact"
              className="bg-teal-600 hover:bg-teal-800 text-white px-4 py-2 rounded-xl ml-8  "
              smooth={true}
              duration={500}
            >
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
