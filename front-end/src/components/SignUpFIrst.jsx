import React, { useState } from "react";
import logo from "../assets/Logo.png";
import Signup_logo from "../assets/Signup_logo.png";
import Google from "../assets/Google.png";
import Linkedin from "../assets/Linkedin.png";
import Yahoo from "../assets/Yahoo.png";
import Terms_signup from "../assets/Terms_signup.png";
import Arrow from "../assets/arraw.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SignUpSecond from "./SignUpSecond";

const SignUpFIrst = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [terms, setTerms] = useState(false);
  const [next, setNext] = useState(false);
  const [error, setError] = useState(false);

  const handleSignupFirst = () => {
    if (email === "" || password === "") {
      setError(true);
      console.log("error");
    }
    if (terms === false) {
      alert("Check the Terms");
    } else {
      setNext(true);
    }
  };
  return (
    <div className="w-[60%] lg:w-[45%] h-[80%] bg-overlap ">
      {next === true ? (
        <SignUpSecond setNext={setNext} email={email} password={password} />
      ) : (
        <div className="w-full h-full">
          <div className="flex flex-row w-full items-center justify-center gap-3 border-2 border-overlap  bg-white pt-4 ">
            <h2 className="text-[17px]">Sign Up to </h2>
            <img src={logo} alt="logo" className="h-[28px]" />
          </div>
          <div className="mt-6 ml-7">
            <div className="flex gap-1 items-center ">
              <img
                src={Signup_logo}
                alt="Signup"
                className="w-[20px] h-[20px]"
              />
              <p className="text-[14px]">Sign up with:</p>
            </div>
            <div className="w-full flex items-center justify-evenly mt-4 mr-4">
              <button className="p-2 pr-6 pl-6 bg-white rounded-sm border border-gray-300 flex gap-2">
                <img src={Google} alt="google" className="w-6" />
                Google
              </button>
              <button className="p-2 pr-6 pl-6 bg-white rounded-sm border border-gray-300 flex gap-2">
                <img src={Linkedin} alt="google" className="w-6" />
                Linkedin
              </button>
              <button className="p-2 pr-6 pl-6 bg-white rounded-sm border border-gray-300 flex gap-2">
                <img src={Yahoo} alt="google" className="w-6" />
                Yahoo
              </button>
            </div>
          </div>
          <div className="w-full flex flez-row items-center justify-center p-6 gap-3 ">
            <div className=" w-[45%] h-[1px] bg-gray-400"></div>
            <p className="font-bold">Or</p>
            <div className=" w-[45%] h-[1px] bg-gray-400"></div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <input
              type="text"
              className="w-[80%]  m-1 p-2 border border-gray-300 "
              placeholder="Email Address"
              value={email}
              style={{
                borderColor: error && "red",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="Password"
              className="w-[80%]  m-1 p-2 border border-gray-300 "
              placeholder="Password"
              value={password}
              style={{
                borderColor: error && "red",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="ml-7 mt-5">
            <div className="flex gap-1 items-center ">
              <img
                src={Terms_signup}
                alt="Signup"
                className="w-[20px] h-[20px]"
              />
              <p className="text-[14px] font-bold">Terms of use:</p>
            </div>
            <div className=" flex items-center justify-center ml-4 mr-5 bg-white p-3 w-[90%] mt-1 border border-gray-300">
              <p className="w-full text-[12px]">
                Do you agree to provide accurate information and use the
                platform for legitimate business proposals only. Terms &
                Conditions
                <input
                  type="checkbox"
                  className="ml-3 mt-2"
                  value={terms}
                  onChange={() => setTerms(!terms)}
                  style={{
                    borderColor: error && "red",
                  }}
                />
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full mt-4">
            <button
              onClick={handleSignupFirst}
              className=" w-[80%]  pl-3 pr-3 pt-2 pb-2 bg-botton_white_text border-[1px] border-botton_white_text rounded-xl flex items-center justify-center text-white shadow-md shadow-shadow_Bottom"
            >
              NEXT
              <img src={Arrow} alt="no" className="w-5 m-[2px]" />
            </button>
            <a className="mt-5">Already have an Account?</a>
            <Link
              to="/login"
              className="w-full flex items-center justify-center"
            >
              <button className="pl-3 pr-3 pt-2 pb-2 mt-2 mb-2 w-[80%] text-graidient_bottom border-[1px] border-graidient_bottom bg-white rounded-md flex items-center justify-center">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpFIrst;
