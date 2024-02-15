import React from "react";
import { FaEye } from "react-icons/fa";
import projectImg_1 from "../../assets/Images/project-1.jpg";
const Projects = () => {
  return (
     
    <div className="bg-gray-300 py-12">
      <h2 className="text-center text-4xl font-bold">Featured Projects</h2>
        <p className="w-1/3 mx-auto mt-4">I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects</p>

      <div className="container mx-auto grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <div className=" p-6 shadow-lg bg-white rounded-xl hover:shadow-2xl mt-10">
        <div>
            <img src={projectImg_1} alt="project img " />
            <h3 className="text-2xl font-bold mt-3">ALEX JAMES</h3>
            <p className="text-md font-semibold text-justify mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              ullam magni eum perferendis velit rerum!
            </p>
            <div className="flex lg:gap-16 gap-8 mt-3">
              <button className="bg-blue-500 relative text-white py-3 pl-4 pr-12 rounded-2xl text-md">
                View Live <FaEye className="absolute right-4 top-4" />
              </button>
              <button className="bg-blue-500 relative text-white py-3 pl-4 pr-12 rounded-2xl text-md ">
                Github Repo <FaEye className="absolute right-4 top-4" />
              </button>
            </div>
          </div>
      </div>

      <div className=" p-6 shadow-lg bg-white rounded-xl hover:shadow-2xl mt-10">
        <div>
            <img src={projectImg_1} alt="project img " />
            <h3 className="text-2xl font-bold mt-3">ALEX JAMES</h3>
            <p className="text-md font-semibold text-justify mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              ullam magni eum perferendis velit rerum!
            </p>
            <div className="flex lg:gap-16 gap-8 mt-3">
              <button className="bg-blue-500 relative text-white py-3 pl-4 pr-12 rounded-2xl text-md">
                View Live <FaEye className="absolute right-4 top-4" />
              </button>
              <button className="bg-blue-500 relative text-white py-3 pl-4 pr-12 rounded-2xl text-md ">
                Github Repo <FaEye className="absolute right-4 top-4" />
              </button>
            </div>
          </div>
      </div>

      <div className=" p-6 shadow-lg bg-white rounded-xl hover:shadow-2xl mt-10">
        <div>
            <img src={projectImg_1} alt="project img " />
            <h3 className="text-2xl font-bold mt-3">ALEX JAMES</h3>
            <p className="text-md font-semibold text-justify mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              ullam magni eum perferendis velit rerum!
            </p>
            <div className="flex lg:gap-16 gap-8 mt-3">
              <button className="bg-blue-500 relative text-white py-3 pl-4 pr-12 rounded-2xl text-md">
                View Live <FaEye className="absolute top-5 right-4" />
              </button>
              <button className="bg-blue-500 relative text-white py-3 pl-4 pr-12 rounded-2xl text-md ">
                Github Repo <FaEye className="absolute top-5 right-4" />
              </button>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
