import React from "react";
import { BsFillDatabaseFill, BsFillCloudCheckFill } from "react-icons/bs";
import { BiSolidServer } from "react-icons/bi";
import { HiPaperAirplane } from "react-icons/hi";
import bgImg from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div
      id="home"
      className=" relative w-full h-auto  bg-zinc-200 flex flex-col  "
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] mt-[110px] m-auto">
        <div className="flex flex-col justify-center  md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequeceing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <button className="py-3 w-full px-6 sm:w-[50%] my-4">
            Get Started
          </button>
        </div>
        <div>
          <img className="w-auto " src={bgImg} alt="/"></img>
        </div>
        <div
          className=" absolute flex flex-col py-6 pt-6  bottom-[-7%] mx-1 transform bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl
          md:min-w-[760px] md:left-1/2 md:-translate-x-1/2 "
        >
          <p>Data Services</p>
          <div className="flex justify-between flex-wrap px4">
            <p className="flex gap-2 items-center justify-center px-4 py-2 text-slate-500">
              <BsFillCloudCheckFill className=" text-indigo-600" />
              App Security
            </p>
            <p className="flex gap-2  items-center justify-center px-4 py-2 text-slate-500">
              <BsFillDatabaseFill className=" text-indigo-600" />
              Dashboard Desing
            </p>
            <p className="flex gap-2  items-center justify-center px-4 py-2 text-slate-500">
              <BsFillCloudCheckFill className=" text-indigo-600" />
              Cloude Data
            </p>
            <p className="flex gap-2  items-center justify-center px-4 py-2 text-slate-500">
              <HiPaperAirplane className=" text-indigo-600" />
              API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
