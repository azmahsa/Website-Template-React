import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiChip, BiPhone } from "react-icons/bi";
import { HiSupport } from "react-icons/hi";
import supportImge from "../assets/support.jpeg";
const Support = () => {
  return (
    <div id="support" className="w-full  mt-24">
      <div className=" w-full h-screen bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImge}
          alt="/"
        />
      </div>
      <div className="max-w-[1024px] pt-8 mx-auto relative text-slate-300  text-center">
        <div className="px-4 py-12">
          <h2 className="uppercase text-3xl pt-8 text-slate-300">SUPPORT</h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-2xl text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor
            commodo ullamcorper a lacus vestibulum sed arcu non odio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-5 gap-y-16 px-4  sm:pt-20">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-16 absolute p-4 flex justify-cent text-white bg-indigo-600 rounded-lg mt-[-4rem]">
                <BiPhone size={35} />
              </div>
              <h3 className="font-bold text-2xl my-6 text-left text-black">
                Sales
              </h3>
              <p className="text-gray-600 text-left text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className=" bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <AiOutlineArrowRight />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-16 absolute p-4 flex justify-cent text-white bg-indigo-600 rounded-lg mt-[-4rem]">
                <HiSupport size={35} />
              </div>
              <h3 className="font-bold text-2xl my-6 text-left text-black">
                Technical Support
              </h3>
              <p className="text-gray-600 text-left text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className=" bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <AiOutlineArrowRight />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-16 absolute p-4 flex justify-cent text-white bg-indigo-600 rounded-lg mt-[-4rem]">
                <BiChip size={35} />
              </div>
              <h3 className="font-bold text-2xl my-6 text-left text-black">
                Media Inquiries
              </h3>
              <p className="text-gray-600 text-left text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className=" bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <AiOutlineArrowRight />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
