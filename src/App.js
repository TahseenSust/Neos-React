import React from "react";
import "./App.css";
import Header from "./component/header";
import Progress from "./component/progress";
import remoteCompany from "./image2.png";
import UserDetails from "./component/userDetails";

function App() {
  return (
    <div className=" mx-auto p-4 my-8 max-w-6xl">
      <Header />
      <div className=" bg-white rounded-2xl mt-4 md:mt-8  flex flex-col items-center ">
        <Progress />
        <div className="flex flex-col md:flex-row">
          <UserDetails />
          <div className=" md:w-1/2  order-1 md:order-2">
            <div className="w-full px-12 py-4 md:py-8 flex justify-center items-center flex-col gap-4">
              <img src={remoteCompany} alt="" className="" />
              <h1 className=" text-2xl md:text-3xl font-bold whitespace-nowrap">
                Price to Pay: €3,600.00
              </h1>
              <button className=" bg-Primary-Color text-white px-6 py-4 rounded-2xl hidden md:block">
                GENERATE CONTRACT
              </button>
            </div>
          </div>
        </div>
        <button className=" bg-Primary-Color text-white px-6 py-4 rounded-2xl mb-8 block md:hidden">
          GENERATE CONTRACT
        </button>
      </div>
    </div>
  );
}

export default App;
