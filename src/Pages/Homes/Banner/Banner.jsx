import React from "react";
import { FaUser, FaEye } from "react-icons/fa";

import bannerImg from "../../../assets/Images/banner-img.png";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} className="w-[400px] rounded-lg shadow-2xl" />
          <div className="w-full px-5 mt-10 lg:w-1/2 mr-10">
            <h3 className="text-2xl font-semibold">Hello, I'm</h3>
            <h1 className="text-5xl font-bold">KONGKON JOWARDER</h1>
            <p className="py-6 text-justify">
              Frontend Web Developer | Passionate about crafting user-friendly
              interfaces with HTML, CSS, and JavaScript. Experienced in React
              and Vue.js. Dedicated to creating visually appealing and
              responsive websites.
            </p>
            <div className="flex gap-10">
            <button className="bg-blue-500 relative text-white py-4 pl-4 pr-12 rounded-2xl text-xl">
                About Me <FaUser className="absolute top-5 right-4"/>
              </button>
              <button className="bg-blue-500 relative text-white py-4 pl-4 pr-12 rounded-2xl text-xl ">
                Projects <FaEye className="absolute top-5 right-4"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
