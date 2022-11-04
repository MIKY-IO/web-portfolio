import React from "react";

export default function About() {
  return (
    <div>
      <div className="text-center p-8">
        <p className="text-4xl font-bold inline border-b-4 dark:text-white border-teal-600 ">
          About me
        </p>
        <div className="pt-2">
          <p className="text-md dark:text-white py-5 leading-8 md:text-xl max-w-xl mx-auto">
            Hi, my name is Mikulas, but everyone calls me Miky. I am an
            enthusiastic rookie developer looking for new opportunities. My
            focus is about bulding a great and modern webpages using the latest
            technologies.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
