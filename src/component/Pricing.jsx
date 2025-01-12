import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
const Pricing = () => {
  return (
    <div id="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
      <div className="max-w-[1100px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase ">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            The Right Price for your Research
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos
            ipsum asperiores, rerum pariatur quis reprehenderit, similique natus
            consequatur sint aut magnam fugit vel a veritatis tempore, aliquam
            inventore possimus.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className=" uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $49
                <sapn className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </sapn>
              </p>
              <p className="text-xl py-8 text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="text-xl">
                <p className="flex py-4">
                  <AiOutlineCheck size={25} className="mr-5 text-green-600" />{" "}
                  Lorm, ipsum dolor.
                </p>
                <p className="flex py-4">
                  <AiOutlineCheck size={25} className="mr-5 text-green-600" />{" "}
                  Lorem, ipsum dolor, sit amet.
                </p>
                <p className="flex py-4">
                  <AiOutlineCheck size={25} className="mr-5 text-green-600" />{" "}
                  Lorem, ipsum dolor, sit.
                </p>
                <p className="flex py-4">
                  <AiOutlineCheck size={25} className="mr-5 text-green-600" />{" "}
                  Lorem, ipsum dolor, sit.
                </p>
                <p className="flex py-4">
                  <AiOutlineCheck size={25} className="mr-5 text-green-600" />{" "}
                  Lorm, ipsum dolor.
                </p>
                <button className="w-full py-4 my-4">Get Started</button>
              </div>
            </div>
            <p></p>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className=" uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              ENTERPRISE
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $10K
                <sapn className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </sapn>
              </p>
              <p className="text-xl py-8 text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="text-xl">
                <p className="flex py-4">
                  <AiOutlineCheck size={25} className="mr-5 text-green-600" />{" "}
                  Lorm, ipsum dolor.
                </p>
                <p className="flex py-4">
                  <AiOutlineCheck size={25} className="mr-5 text-green-600" />{" "}
                  Lorem, ipsum dolor, sit amet.
                </p>
                <p className="flex py-4">
                  <AiOutlineCheck size={25} className="mr-5 text-green-600" />{" "}
                  Lorem, ipsum dolor, sit.
                </p>
                <p className="flex py-4">
                  <AiOutlineCheck size={25} className="mr-5 text-green-600" />{" "}
                  Lorem, ipsum dolor, sit.
                </p>
                <p className="flex py-4">
                  <AiOutlineCheck size={25} className="mr-5 text-green-600" />{" "}
                  Lorm, ipsum dolor.
                </p>
                <button className="w-full py-4 my-4">Get Started</button>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
