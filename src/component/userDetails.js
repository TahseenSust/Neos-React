import React from "react";

const Separator = ({ className }) => {
  return (
    <div
      className={`md:col-span-2 border-t border-Border-color my-4 ${className}`}
    ></div>
  );
};

const UserDetails = () => {
  return (
    <div className=" md:w-1/2 px-12 py-4 md:py-8 order-2 md:order-1">
      <h1 className=" text-3xl font-bold mb-6">Your Details</h1>
      <div className=" border border-Border-color rounded-2xl p-2 w-full md:p-8 ">
        <div className="  mx-2 grid grid-cols-1 md:grid-cols-2 gap-x-4 whitespace-nowrap ">
          <div>
            <h3 className=" text-base font-semibold">First Name</h3>
            <p className=" text-base font-medium text-Text-color-1">Cameron</p>
          </div>

          <Separator className=" md:hidden" />
          <div>
            <h3 className=" text-base font-semibold">Last Name</h3>
            <p className=" text-base font-medium text-Text-color-1">
              Williamson
            </p>
          </div>
          <Separator />
          <div>
            <h3 className=" text-base font-semibold">Email Address</h3>
            <p className=" text-base font-medium text-Text-color-1">
              cameron@gmail.com
            </p>
          </div>
          <Separator className=" md:hidden" />
          <div>
            <h3 className=" text-base font-semibold">Phone Number</h3>
            <p className=" text-base font-medium text-Text-color-1">
              (406) 555-0120
            </p>
          </div>
          <Separator />
          <div className=" md:col-span-2">
            <h3 className=" text-base font-semibold">CUPS</h3>
            <p className=" text-base font-medium text-Text-color-1">
              ES0043000006063027KW
            </p>
          </div>

          <Separator />
          <div className=" md:col-span-2">
            <h3 className=" text-base font-semibold">Address</h3>
            <p className=" text-base font-medium text-Text-color-2">
              2972 Westheimer Rd
            </p>
          </div>
          <Separator />
          <div>
            <h3 className=" text-base font-semibold">Postcode</h3>
            <p className=" text-base font-medium text-Text-color-2">984 493</p>
          </div>
          <Separator className=" md:hidden" />
          <div>
            <h3 className=" text-base font-semibold">City</h3>
            <p className=" text-base font-medium text-Text-color-2">
              New York City, NY
            </p>
          </div>
        </div>
      </div>
      <div className=" flex my-4 md:p-8 gap-4 justify-center items-center">
        <input type="checkbox" />
        <p className=" text-base">
          By ticking this box, you are confirming that you have read,
          understood, and agreed to our{" "}
          <a href="https://www.google.com/" className=" text-[#2F80ED]">
            <u>Terms of Service.</u>
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
