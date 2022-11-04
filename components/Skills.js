import Image from "next/image";

import HTML from "../public/assets/html.png";
import CSS from "../public/assets/css.png";
import JavaScript from "../public/assets/javascript.png";
import ReactImg from "../public/assets/react.png";
import Node from "../public/assets/node.png";
import GitHub from "../public/assets/github.png";
import figma from "../public/assets/figma.png";
import jira from "../public/assets/jira.png";
// import css from "styled-jsx/css";

export default function Skills() {
  return (
    <>
      <div name="skills" className="w-full bg-[#ffffff] dark:bg-gray-800">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="text-center">
            <p className="text-4xl  dark:text-white font-bold inline border-b-4 border-teal-600 ">
              Skills
            </p>
            <p className="py-4 dark:text-white">
              These are the technologies I have worked with
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="rounded-lg shadow-md shadow-[#040c1631] hover:scale-110 duration-500">
              <Image
                className="w-20 mx-auto"
                src={HTML}
                alt="HTML icon"
                width={320}
                height={200}
              />
              <p className="my-4 dark:text-white ">HTML</p>
            </div>
            <div className="rounded-lg shadow-md shadow-[#040c1631] hover:scale-110 duration-500">
              <Image
                className="w-20 mx-auto"
                src={CSS}
                alt="HTML icon"
                width={320}
                height={200}
              />
              <p className="my-4 dark:text-white">CSS</p>
            </div>
            <div className="rounded-lg shadow-md shadow-[#040c1631] hover:scale-110 duration-500">
              <Image
                className="w-20 mx-auto"
                src={JavaScript}
                alt="HTML icon"
                width={320}
                height={200}
              />
              <p className="my-4 dark:text-white">JAVASCRIPT</p>
            </div>
            <div className="rounded-lg shadow-md shadow-[#040c1631] hover:scale-110 duration-500">
              <Image
                className="w-20 mx-auto"
                src={ReactImg}
                alt="HTML icon"
                width={320}
                height={200}
              />
              <p className="my-4 dark:text-white">REACT</p>
            </div>
            <div className="rounded-lg shadow-md shadow-[#040c1631] hover:scale-110 duration-500">
              <Image
                className="w-20 mx-auto"
                src={GitHub}
                alt="HTML icon"
                width={320}
                height={200}
              />
              <p className="my-4 dark:text-white">GITHUB</p>
            </div>
            <div className="rounded-lg shadow-md shadow-[#040c1631] hover:scale-110 duration-500">
              <Image
                className="w-20 mx-auto"
                src={Node}
                alt="HTML icon"
                width={320}
                height={200}
              />
              <p className="my-4 dark:text-white">NODE</p>
            </div>
            <div className="rounded-lg shadow-md shadow-[#040c1631] hover:scale-110 duration-500">
              <Image
                className="w-20 mx-auto"
                src={figma}
                alt="HTML icon"
                width={320}
                height={200}
              />
              <p className="my-4 dark:text-white">FIGMA</p>
            </div>
            <div className="rounded-lg shadow-md shadow-[#040c1631] hover:scale-110 duration-500">
              <Image
                className="w-20 mx-auto"
                src={jira}
                alt="HTML icon"
                width={320}
                height={200}
              />
              <p className="my-4 dark:text-white">JIRA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
