import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillSkype,
  // AiFillMail,
} from "react-icons/ai";
import Image from "next/image";
import profile from "../public/profile.png";

export default function Header() {
  return (
    <>
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">
          Mikulas Richter
        </h2>
        <h3 className="text-2xl py-2">Developer and Email marketer.</h3>
        <p className="text-md py-5 leading-8 text-gray-800">
          Freelancer providing sevices for programming needs. Join me down below
          and let`s get cracking!
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillLinkedin />
        <AiFillGithub />
        <AiFillSkype />
        {/* <AiFillMail /> */}
      </div>
      <div className="mx-auto scale-50 ">
        <Image src={profile} layout="fill" objectFit="cover" />
      </div>
    </>
  );
}
