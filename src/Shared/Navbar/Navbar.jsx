import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Images/banner-img.png";
const Navbar = () => {
  return (
    <div className="bg-blue-400 text-white sticky top-0 z-50">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-400 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  style={{ background: "none", fontSize: "20px" }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about_Us"
                  style={{ background: "none", fontSize: "20px" }}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  style={{ background: "none", fontSize: "20px" }}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  style={{ background: "none", fontSize: "20px" }}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  style={{ background: "none", fontSize: "20px" }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">Portfolio</Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" style={{ background: "none", fontSize: "20px" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about_Us"
                style={{ background: "none", fontSize: "20px" }}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                style={{ background: "none", fontSize: "20px" }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                style={{ background: "none", fontSize: "20px" }}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={{ background: "none", fontSize: "20px" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img className="bg-white"
                  alt="Tailwind CSS Navbar component"
                  src={Logo}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-blue-400 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
