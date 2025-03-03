import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Web_logo.png";
import Arrow from "../assets/arraw.png";

const WebHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="p-3 pt-7 w-full flex h-[30px] ">
      <div className=" w-[20%]  ">
        <img className="w-[80%] ml-7" src={Logo} alt="Logo" />
      </div>
      <div className="w-[60%] items-center justify-center flex gap-6 pt-3 ">
        <NavLink className="hover:font-bold" to="/pricing">
          Pricing
        </NavLink>
        <NavLink className="hover:font-bold" to="/templates">
          Templates
        </NavLink>
        <NavLink className="hover:font-bold" to="/">
          Resources
        </NavLink>
        <NavLink className="hover:font-bold" to="/">
          Who's it for
        </NavLink>
      </div>
      <div className="flex gap-4 w-[20%] items-center justify-end pt-3 mr-10">
        <button
          onClick={() => navigate("/login")}
          className="pl-3 pr-3 hidden lg:block pt-2 pb-2 bg-white text-botton_white_text border-[1px] border-botton_white_text rounded-md"
        >
          Login
        </button>
        <Link to="/signup">
          <button className="pl-3 pr-3 pt-2 pb-2 bg-botton_white_text border-[1px] border-botton_white_text rounded-md flex text-white">
            Try it free
            <img src={Arrow} alt="no" className="w-5 m-[2px]" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WebHeader;
