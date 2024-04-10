import React from "react";
const About = () => {
  return (
    <div id="about" className="w-full my-32">
      <div className=" max-w-[1024px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by Developers across the World.
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel
            orci porta non pulvinar neque. Nisl vel pretium lectus quam id leo.
          </p>
          <div className="grid md:grid-cols-3 gap-2 px-2 w-full text-center">
            <div className="border py-8 rounded-xl shadow-xl mb-2">
              <p className="text-5xl font-bold text-indigo-600">100%</p>
              <p className="text-gray-400 mt-2">Completion</p>
            </div>
            <div className="border py-8 rounded-xl shadow-xl mb-2">
              <p className="text-5xl font-bold text-indigo-600">24/7</p>
              <p className="text-gray-400 mt-2">Delivery</p>
            </div>
            <div className="border py-8 rounded-xl shadow-xl mb-2">
              <p className="text-5xl font-bold text-indigo-600">100K</p>
              <p className="text-gray-400 mt-2">Transaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
