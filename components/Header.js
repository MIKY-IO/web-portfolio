import { AiFillLinkedin, AiFillGithub, AiFillSkype } from "react-icons/ai";
import Image from "next/image";
import Profile from "../public/profile.png";

export default function Header() {
  return (
    <>
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Mikuláš Richter
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
          Developer and Email marketer.
        </h3>
        <p className="text-md dark:text-white py-5 leading-8 md:text-xl max-w-xl mx-auto">
          Freelancer providing sevices for programming needs. Contact me down
          below and let`s get cracking!
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <a href="https://www.linkedin.com/in/mikulasrichter/">
          <AiFillLinkedin className="text-black dark:text-white hover:scale-110 duration-500 " />
        </a>
        <a href="https://github.com/MIKY-IO">
          <AiFillGithub className="text-black dark:text-white hover:scale-110 duration-500 " />
        </a>
        <a href="https://join.skype.com/invite/E1hTw20KaKQE">
          <AiFillSkype className="text-black dark:text-white hover:scale-110 duration-500 " />
        </a>
      </div>
      <div className="relative flex items-center justify-center">
        <div className=" py-20 h-96 w-96">
          <Image src={Profile} width="100%" height="100%" objectFit="contain" />
        </div>
      </div>
    </>
  );
}
