import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center pb-5">
      <footer>
        <p className="dark:text-white ">
          Copyright &copy; MIKY-IO | Portfolio {new Date().getUTCFullYear()}
        </p>
      </footer>
    </div>
  );
}
