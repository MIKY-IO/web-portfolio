import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full bg-[#ffffff] dark:bg-gray-800  h-screen flex justify-center items-center  "
    >
      <form
        method="POST"
        action="https://getform.io/f/d169b926-f5de-4690-b894-a585bc01d5f8"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 dark:text-white border-teal-600 ">
            Contact
          </p>
          <p className="dark:text-white py-4 ">Submit the form below:</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <input
            className=" rounded-lg border shadow-lg p-3 dark:bg-[#ccd6f6]"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className=" rounded-lg border shadow-lg p-3 dark:bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
        </div>
        <input
          className="rounded-lg border shadow-lg p-3 w-full my-2 dark:bg-[#ccd6f6]"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="dark:bg-[#ccd6f6] bg-gray-100 rounded-lg border shadow-lg p-3 w-full"
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className=" bg-teal-600 hover:bg-teal-800 text-white rounded-lg  px-4 py-3 my-8 mx-auto flex items-center">
          {" "}
          Let`s Collaborate
        </button>
      </form>
    </div>
  );
}
