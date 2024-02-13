import logo from "../logo.png";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <img src={logo} alt="" className=" w-auto md:h-8 h-5" />
      <div className=" flex justify-center items-center gap-4">
        <p className=" text-sm md:text-xl text-white font-bold">FAQs</p>
        <button className="text-sm md:text-xl py-2 px-3 bg-white text-black rounded-lg font-bold">
          English
        </button>
      </div>
    </div>
  );
};

export default Header;
