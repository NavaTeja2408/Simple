import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import Signup_logo from "../../assets/Signup_logo.png";
import Google from "../../assets/Google.png";
import Linkedin from "../../assets/Linkedin.png";
import Yahoo from "../../assets/Yahoo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WebHeader from "../../components/WebHeader";
import { DatabaseContext } from "../../context/DatabaseContext";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { databaseUrl } = useContext(DatabaseContext);
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSignupFirst = () => {
    if (email === "" || password === "") {
      setError(true);
      console.log("error");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    try {
      if (handleSignupFirst() === false) {
        console.log("error");
      } else {
        await axios
          .post(`${databaseUrl}/api/auth/login`, { email, password })
          .then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data));
            setUser(res.data);
          });
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log(user);
      navigate("/workspaces");
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="fixed top-0 left-0 right-0">
        <WebHeader />
      </div>
      <div className="w-[40%] lg:w-[45%] h-[70%] bg-overlap ">
        <div className="w-full h-full">
          <div className="flex flex-row w-full items-center justify-center gap-3 border-2 border-overlap  bg-white pt-4 ">
            <h2 className="text-[17px]">Login </h2>
            <img src={logo} alt="logo" className="h-[29px]" />
          </div>
          <div className="mt-6 ml-7">
            <div className="flex gap-1 items-center ">
              <img
                src={Signup_logo}
                alt="Signup"
                className="w-[20px] h-[20px]"
              />
              <p className="text-[14px]">Login with:</p>
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
          <div className="flex flex-col items-center justify-center w-full mt-4">
            <a onClick={() => navigate("/signup")} className="mt-5">
              Create new Account?
            </a>
            <button
              onClick={handleLogin}
              className="pl-3 pr-3 pt-2 pb-2 mt-2 mb-2 w-[80%] text-graidient_bottom border-[1px] border-graidient_bottom bg-white rounded-md flex items-center justify-center"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
