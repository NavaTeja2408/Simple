import React, { useState, useContext } from "react";
import logo from "../assets/Logo.png";
import Signup_logo from "../assets/Signup_logo.png";
import Signup_company from "../assets/signup_company.png";
import Signup_folder from "../assets/Signup_folder.png";
import Arrow from "../assets/arraw.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DatabaseContext } from "../context/DatabaseContext";

const SignUpSecond = ({ setNext, email, password }) => {
  const [fullname, setFullname] = useState("");
  const [companyName, setComapanyName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [companySize, setComapnySize] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [workspace, setWorkspace] = useState("");
  const [color, setColor] = useState("green");
  const navigate = useNavigate();
  const { databaseUrl } = useContext(DatabaseContext);

  const handleGoback = () => {
    setNext(false);
  };

  const handleSubmit = async () => {
    try {
      await axios
        .post(`${databaseUrl}/api/auth/signup`, {
          fullName: fullname,
          email: email,
          password: password,
          companyName: companyName,
          companySize: companySize,
          teamName: teamName,
          teamSize: teamSize,
          workspaceName: workspace,
          workspaceColor: color,
          subscription: "trial",
        })
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="flex flex-row w-full items-center justify-center gap-3 border-2 border-overlap  bg-white pt-4 ">
        <h2 className="text-[17px]">Sign Up to </h2>
        <img src={logo} alt="logo" className="h-[28px]" />
      </div>
      <div className="mt-6 ">
        <div className="flex gap-1 items-center ml-7 ">
          <img src={Signup_logo} alt="Signup" className="w-[20px] h-[20px]" />
          <p className="text-[14px] font-bold">Sign up with:</p>
        </div>
        <div className="w-full mt-2 flex items-center justify-center">
          <input
            type="text"
            className="w-[90%]  m-1 p-2 border border-gray-300 "
            placeholder="Fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-6 ">
        <div className="flex gap-1 items-center ml-7 ">
          <img
            src={Signup_company}
            alt="Signup"
            className="w-[20px] h-[20px]"
          />
          <p className="text-[14px] font-bold">Company & Team Details:</p>
        </div>
        <div className="w-full mt-2 flex items-center justify-center gap-2">
          <input
            type="text"
            className="w-[40%]  m-1 p-2 border border-gray-300 "
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setComapanyName(e.target.value)}
          />
          <input
            type="text"
            className="w-[40%]  m-1 p-2 border border-gray-300 "
            placeholder="Company Size"
            value={companySize}
            onChange={(e) => setComapnySize(e.target.value)}
          />
        </div>
        <div className="w-full mt-2 flex items-center justify-center gap-2">
          <input
            type="text"
            className="w-[40%]  m-1 p-2 border border-gray-300 "
            placeholder="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <input
            type="text"
            className="w-[40%]  m-1 p-2 border border-gray-300 "
            placeholder="Team Size"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
          />
        </div>
      </div>

      {/* This div is incomplete */}
      <div className="mt-6 ">
        <div className="flex gap-1 items-center ml-7 ">
          <img src={Signup_folder} alt="Signup" className="w-[20px] h-[20px]" />
          <p className="text-[14px] font-bold">Workspace:</p>
        </div>
        <div className="w-full mt-2 flex items-center justify-center">
          <input
            type="text"
            className="w-[90%]  m-1 p-2 border border-gray-300 "
            placeholder="name"
            style={{
              borderColor: color,
            }}
            value={workspace}
            onChange={(e) => setWorkspace(e.target.value)}
          />
        </div>
        <div className="flex flex-col  w-full mt-4 ml-7">
          <p>You can choose colors for you workspace:</p>
          <div className="flex flex-row gap-3 mt-2 ml-2">
            <div
              style={{
                borderColor: color === "green" && "white",
              }}
              onClick={() => setColor("green")}
              className="bg-green-600 rounded-[100%] w-8 h-8"
            ></div>
            <div
              style={{
                border: "2px",
                borderColor: color === "red" ? "white" : "",
              }}
              onClick={() => setColor("red")}
              className=" bg-red-600 rounded-[100%] w-8 h-8"
            ></div>
            <div
              style={{
                border: "2px",
                borderColor: color === "blue" ? "white" : "",
              }}
              onClick={() => setColor("blue")}
              className="bg-blue-600 rounded-[100%] w-8 h-8"
            ></div>
            <div
              style={{
                border: "2px",
                borderColor: color === "yellow" && "white",
              }}
              onClick={() => setColor("yellow")}
              className="bg-yellow-600 rounded-[100%] w-8 h-8"
            ></div>
            <div
              style={{
                border: "2px",
                borderColor: color === "orange" && "white",
              }}
              onClick={() => setColor("orange")}
              className="bg-orange-600 rounded-[100%] w-8 h-8"
            ></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3  items-center justify-center w-full mt-4">
        <button
          onClick={handleSubmit}
          className=" w-[80%]  pl-3 pr-3 pt-2 pb-2 bg-botton_white_text border-[1px] border-botton_white_text rounded-xl flex items-center justify-center text-white shadow-md shadow-shadow_Bottom"
        >
          Get started
          <img src={Arrow} alt="no" className="w-5 m-[2px]" />
        </button>
        <button
          onClick={handleGoback}
          className="pl-3 pr-3 pt-2 pb-2 mt-2 mb-2 w-[80%] text-graidient_bottom border-[1px] border-graidient_bottom bg-white rounded-md flex items-center justify-center"
        >
          BACK
        </button>
      </div>
    </div>
  );
};

export default SignUpSecond;
