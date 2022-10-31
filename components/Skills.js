import Image from "next/image";

import HTML from "../public/assets/html.png";
import CSS from "../public/assets/css.png";
import JavaScript from "../public/assets/javascript.png";
import ReactImg from "../public/assets/react.png";
import Node from "../public/assets/node.png";
import GitHub from "../public/assets/github.png";
import figma from "../public/assets/figma.png";
import jira from "../public/assets/jira.png";
import css from "styled-jsx/css";

export default function Skills() {
  return (
    <>
      <div name="skills" className="w-full h-screen bg-[#ffffff] text-gray-800">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-[#ffffff] ">
              Skills
            </p>
            <p className="py-4">
              These are the technologies I have worked with
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c1631] hover:scale-110 duration-500">
              <Image
                className="w-20 mx-auto"
                src={HTML}
                alt="HTML icon"
                width={320}
                height={200}
              />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c1631] hover:scale-110 duration-500">
              <Image
                className="w-20 mx-auto"
                src={CSS}
                alt="HTML icon"
                width={320}
                height={200}
              />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c1631] hover:scale-110 duration-500">
              <Image
                className="w-20 mx-auto"
                src={JavaScript}
                alt="HTML icon"
                width={320}
                height={200}
              />
              <p className="my-4">JAVASCRIPT</p>
            </div>
            <div className="shadow-md shadow-[#040c1631] hover:scale-110 duration-500">
              <Image
                className="w-20 mx-auto"
                src={ReactImg}
                alt="HTML icon"
                width={320}
                height={200}
              />
              <p className="my-4">REACT</p>
            </div>
            <div className="shadow-md shadow-[#040c1631] hover:scale-110 duration-500">
              <Image
                className="w-20 mx-auto"
                src={GitHub}
                alt="HTML icon"
                width={320}
                height={200}
              />
              <p className="my-4">GITHUB</p>
            </div>
            <div className="shadow-md shadow-[#040c1631] hover:scale-110 duration-500">
              <Image
                className="w-20 mx-auto"
                src={Node}
                alt="HTML icon"
                width={320}
                height={200}
              />
              <p className="my-4">NODE</p>
            </div>
            <div className="shadow-md shadow-[#040c1631] hover:scale-110 duration-500">
              <Image
                className="w-20 mx-auto"
                src={figma}
                alt="HTML icon"
                width={320}
                height={200}
              />
              <p className="my-4">FIGMA</p>
            </div>
            <div className="shadow-md shadow-[#040c1631] hover:scale-110 duration-500">
              <Image
                className="w-20 mx-auto"
                src={jira}
                alt="HTML icon"
                width={320}
                height={200}
              />
              <p className="my-4">JIRA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
