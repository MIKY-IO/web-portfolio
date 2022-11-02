import { BsFillMoonStarsFill } from "react-icons/bs";
import React, { useState } from "react";

// props
// {
//     onDarkModeChange: (value) => setDarkMode(value),
//     stringProperty: "hello world"
//     ...
// }

export default function Navbar(props) {
  const { onDarkModeChange } = props;
  const { isDark } = props;
  //   const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl">MIKY-IO</h1>
        <ul className="flex items-center">
          <li>
            <button
              onClick={() => {
                // setToggle(!toggle);
                onDarkModeChange(!isDark);
              }}
            >
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </button>
          </li>

          {/* link na resume a neni <li*/}
          {/* <li><a href="#">Resume</a></li> */}
        </ul>
      </nav>
    </>
  );
}
