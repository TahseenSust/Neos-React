import React from "react";

const Bar = ({ className }) => {
  return <span className={` w-full mt-4 border-t-2 ${className}`}></span>;
};

const Progress = () => {
  return (
    <div className=" flex justify-center p-2 md:p-4 gap-1 text-base my-4 md:my-8 w-full max-w-[630px]">
      <div className=" flex flex-col md:flex-row justify-center items-center gap-2">
        <div className=" bg-Primary-Color w-8 h-8 rounded-full flex justify-center items-center text-white">
          1
        </div>
        <p className=" text-xs md:text-base whitespace-nowrap">Receive Offer</p>
      </div>
      <Bar className="border-Primary-Color" />
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 ">
        <div className=" bg-Primary-Color w-8 h-8 rounded-full flex justify-center items-center text-white">
          2
        </div>
        <p className=" text-xs md:text-base whitespace-nowrap">Sign Contract</p>
      </div>
      <Bar className="border-Bg-1" />
      <div className=" flex flex-col md:flex-row justify-center items-center gap-2">
        <div className=" bg-Bg-1 w-8 h-8 rounded-full flex justify-center items-center">
          3
        </div>
        <p className=" text-xs md:text-base whitespace-nowrap">Enjoy Solar</p>
      </div>
    </div>
  );
};

export default Progress;
