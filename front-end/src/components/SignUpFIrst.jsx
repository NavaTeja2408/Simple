import React, { useCallback, useContext, useState } from "react";
import Signup_logo from "../assets/Signup_logo.png";
import Google from "../assets/Google.png";
import Linkedin from "../assets/Linkedin.png";
import Yahoo from "../assets/Yahoo.png";
import Terms_signup from "../assets/Terms_signup.png";
import Arrow from "../assets/arraw.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SignUpSecond from "./SignUpSecond";
import { DatabaseContext } from "../context/DatabaseContext";
import logo from "../assets/Web_logo.png";
import { FaEye } from "react-icons/fa6";
import toast from "react-hot-toast";

const SignUpFIrst = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { databaseUrl } = useContext(DatabaseContext);

  const navigate = useNavigate();
  const [terms, setTerms] = useState(false);
  const [next, setNext] = useState(false);
  const [error, setError] = useState(false);
  const [pass1, setPass1] = useState(false);
  const [pass2, setPass2] = useState(false);
  const [cpassword, setCPassword] = useState("");

  const handleSignupFirst = () => {
    if (email === "" || password === "") {
      setError(true);
      toast.error("Please enter all the details");
    }
    if (password !== cpassword) {
      setError(true);
      toast.error("Password and confirm password didn't match");
    } else {
      setNext(true);
    }
  };
  const signupwithgoogle = () => {
    window.open(`${databaseUrl}/auth/google/callback`, "_self");
  };
  return (
    <div className="w-[70%] h-[75%] bg-white flex items-center shadow-xl shadow-gray-200 justify-between mt-16 border border-gray-100 rounded-xl  ">
      <div className="w-[50%] h-[100%] flex items-center justify-center  ">
        <div className="w-[85%] h-[85%] flex items-center justify-center text-center relative bg-gray-200 rounded-2xl">
          <div className="w-full h-14 flex justify-center items-center absolute top-1">
            <img src={logo} className="w-40" alt="" />
          </div>
          <p className="w-[70%] text-center">
            Start your quest with Simple Quest — create proposals that win.
          </p>
        </div>
      </div>
      {next === true ? (
        <SignUpSecond setNext={setNext} email={email} password={password} />
      ) : (
        <div className="w-[50%] h-[90%] flex flex-col justify-center items-center">
          <div className="w-full flex items-center justify-center">
            <h1 className="text-2xl mb-2">Create Account</h1>
          </div>

          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <div className="flex flex-col w-[80%] gap-1">
              <label className="text-gray-700 pl-1">Email</label>
              <input
                type="text"
                className="w-full  p-2 border border-gray-200 rounded-sm outline-none "
                placeholder="Email Address"
                value={email}
                style={{
                  borderColor: error && "red",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[80%] gap-1">
              <label className="text-gray-700 pl-1">Password</label>
              <div
                className="w-full  border border-gray-200 flex items-center justify-between pr-4 rounded-sm"
                style={{
                  borderColor: error && "red",
                }}
              >
                <input
                  type={pass1 ? "text" : "password"}
                  className="w-[95%] p-2 outline-none "
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FaEye
                  onClick={() => setPass1(!pass1)}
                  className=" cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col w-[80%] gap-1">
              <label className="text-gray-700 pl-1">Confirm Password</label>
              <div
                className="w-full  border border-gray-200 flex items-center justify-between pr-4 rounded-sm"
                style={{
                  borderColor: error && "red",
                }}
              >
                <input
                  type={pass2 ? "text" : "password"}
                  className="w-[95%] p-2 outline-none "
                  placeholder="Password"
                  value={cpassword}
                  onChange={(e) => setCPassword(e.target.value)}
                />
                <FaEye
                  onClick={() => setPass2(!pass2)}
                  className=" cursor-pointer"
                />
              </div>
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
            <div className="w-full flex flez-row items-center justify-center p-6 gap-3 ">
              <div className=" w-[30%] h-[1px] bg-gray-400"></div>
              <p className="text-sm text-gray-700">Or sign Up with</p>
              <div className=" w-[30%] h-[1px] bg-gray-400"></div>
            </div>
            <div className="w-full">
              <div className="w-full flex items-center justify-evenly mt-4 mr-4">
                <button
                  onClick={() => signupwithgoogle()}
                  className="w-[80%] py-2 flex items-center justify-center bg-white rounded-sm border border-gray-300  gap-2 text-gray-600"
                >
                  <img src={Google} alt="google" className="w-6" />
                  Google
                </button>
              </div>
            </div>
            <a className="mt-5 text-sm text-gray-600">
              Already have an Account?
              <Link to="/login">
                <span className="text-graidient_bottom"> Login</span>
              </Link>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpFIrst;
