import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons">MIKY-IO</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
          </li>

          {/* link na resume a neni <li*/}
          {/* <li><a href="#">Resume</a></li> */}
        </ul>
      </nav>
    </>
  );
}
