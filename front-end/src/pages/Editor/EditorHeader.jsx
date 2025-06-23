import React, { useContext, useEffect, useState, useRef } from "react";
import logo from "../../assets/Logo.png";
import Header_editor from "../../assets/Header_editor.png";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import { DatabaseContext } from "../../context/DatabaseContext";
import { useNavigate } from "react-router-dom";
import { GrUndo, GrRedo } from "react-icons/gr";
import { MdOutlineHistory } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { FaRegShareSquare } from "react-icons/fa";
import { IoIosCloudDone } from "react-icons/io";
import { RiLink } from "react-icons/ri";
import word from "../../assets/Word.png";
import pdf from "../../assets/Pdf.png";
import { BsPinAngle } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuLockKeyholeOpen } from "react-icons/lu";
import { LuLockKeyhole } from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";
import { Link } from "react-router-dom";
import GeneratePDF from "./GeneratePDF";
import JsonToWord from "./GenerateWord";
import { AiOutlineDownload } from "react-icons/ai";
import { GrDownload } from "react-icons/gr";
import { LiaUndoSolid } from "react-icons/lia";
import { LiaRedoSolid } from "react-icons/lia";
import { FiUnlock } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import header_menu from "../../assets/header_menu.png";
const EditorHeader = ({
  rows,
  id,
  proposalName,
  share,
  setShare,
  menu,
  setMenu,
  parentRef,
  setMove,
  setRows,
  setPreview,
  preview,
  favorate,
  setFavorate,
  settings,
}) => {
  const [saving, setSaving] = useState(false);
  const [headerName, setHeaderName] = useState(proposalName);
  const [notifiacations, setNotification] = useState(false);
  const [lock, setLock] = useState(false);
  const { databaseUrl } = useContext(DatabaseContext);
  const [copySuccess, setCopySuccess] = useState("");
  const navigate = useNavigate();
  const lockRef = useRef(null);
  const menuRef = useRef(null);
  const bellRef = useRef(null);
  const shareRef = useRef(null);
  const [que, setQue] = useState([]);
  const [name, setName] = useState("");
  const [created, setCreated] = useState("");
  const [changing, setChanging] = useState(false);
  const [view, setView] = useState(true);
  const [tool, setTool] = useState(null);

  const undo = () => {
    if (rows.length > 0) {
      const lastItem = rows[rows.length - 1];
      setRows(rows.slice(0, -1));
      setQue([...que, lastItem]);
    }
  };

  const getDetails = async () => {
    try {
      const res = await axios.get(`${databaseUrl}/api/editor/details`, {
        params: { id: id },
      });
      console.log(res.data);
      setName(res.data.proposalName);
      setCreated(res.data.Users[0].fullName);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  const redo = () => {
    if (que.length > 0) {
      const firstItem = que[que.length - 1]; // Get first element
      setQue(que.slice(0, -1)); // Remove the first item from secondArray
      setRows([...rows, firstItem]); // Add the first item to firstArray
    }
  };

  const handleGeneratePdf = () => {
    GeneratePDF(rows, settings);
  };

  const handleGenerateWord = () => {
    JsonToWord(rows);
  };

  const handleFavorate = async () => {
    try {
      await axios.put(`${databaseUrl}/api/editor/favorate`, {
        id: id,
        favorate: favorate === true ? false : true,
      });
      setFavorate(!favorate);
      setMenu(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLocked = async (data) => {
    try {
      await axios.put(`${databaseUrl}/api/editor/locked`, {
        id: id,
        preview: data,
      });
      setPreview(data);
      setLock(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLastSeen = async () => {
    try {
      await axios.put(`${databaseUrl}/api/editor/lastseen`, {
        id: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleLastSeen();
  }, []);

  const handleClickOutsideLock = (event) => {
    if (lockRef.current && !lockRef.current.contains(event.target)) {
      setLock(false);
    }
  };
  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenu(false);
    }
  };
  const handleClickOutsideBell = (event) => {
    if (bellRef.current && !bellRef.current.contains(event.target)) {
      setNotification(false);
    }
  };
  const handleClickOutsideShare = (event) => {
    if (shareRef.current && !shareRef.current.contains(event.target)) {
      setShare(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideLock);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideLock);
    };
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideShare);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideShare);
    };
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideBell);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideBell);
    };
  }, []);

  const handleCopy = () => {
    const baseUrl = window.location.origin; // dynamically gets the base URL
    const fullUrl = `${baseUrl}/#/view/${id}`;

    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        setCopySuccess("Copied");
        setTimeout(() => setCopySuccess(""), 3000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        setCopySuccess("Failed to copy");
      });
  };

  const changeRename = async (value) => {
    try {
      await axios.post(`${databaseUrl}/api/editor/name`, {
        name: value,
        id: id,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setName(value);
    }
  };

  const updateProposal = async () => {
    try {
      if (rows.length !== 0) {
        setSaving(true);
        await axios.put(`${databaseUrl}/api/editor/updateProposal`, {
          id: id,
          rows: rows,
          settings: settings,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSaving(false);
    }
  };
  const updateTimeout = useRef(null);

  const spanRef = useRef(null);
  const [inputWidth, setInputWidth] = useState(50); // initial width

  useEffect(() => {
    if (spanRef.current) {
      const spanWidth = spanRef.current.offsetWidth;
      setInputWidth(spanWidth + 20); // Add padding/margin buffer
    }
  }, [name]);

  useEffect(() => {
    // Clear any existing timeout when dependencies change
    if (updateTimeout.current) {
      clearTimeout(updateTimeout.current);
    }

    // Set a new timeout to wait 5 seconds after the last change
    updateTimeout.current = setTimeout(() => {
      updateProposal(); // Execute only once after rows/settings stop changing
      updateTimeout.current = null; // Reset reference after execution
    }, 4000);

    // Cleanup timeout when component unmounts
    return () => {
      if (updateTimeout.current) {
        clearTimeout(updateTimeout.current);
      }
    };
  }, [rows, settings]);
  return (
    <div className="w-full flex items-center justify-evenly h-16 px-7 border-b-[1px] border-gray-200 shadow-lg be-vietnam-pro-regular relative ">
      {tool === "Manage sharing proposal" && (
        <div className=" absolute left-[65%] -bottom-2 px-2 bg-gray-600 text-white z-50 text-xs rounded-sm ">
          {tool}
        </div>
      )}
      {tool === "Undo" && (
        <div className=" absolute left-[64%] -bottom-1 px-2 bg-gray-600 text-white z-50 text-xs rounded-sm ">
          {tool}
        </div>
      )}
      {tool === "Redo" && (
        <div className=" absolute left-[67%] -bottom-1 px-2 bg-gray-600 text-white z-50 text-xs rounded-sm ">
          {tool}
        </div>
      )}
      {tool === "Notifications" && (
        <div className=" absolute left-[72%] -bottom-2 px-2 bg-gray-600 text-white z-50 text-xs rounded-sm ">
          {tool}
        </div>
      )}
      {tool === "More Actions" && (
        <div className=" absolute left-[76%] -bottom-2 px-2 bg-gray-600 text-white z-50 text-xs rounded-sm ">
          {tool}
        </div>
      )}
      {tool === "Preview This Document" && (
        <div className=" absolute left-[81%] -bottom-1 px-2 bg-gray-600 text-white z-50 text-xs rounded-sm ">
          {tool}
        </div>
      )}
      <div className="flex flex-row w-[50%] items-center justify-start gap-1 relative">
        <img
          onClick={() => navigate("/home")}
          src={logo}
          alt="logo"
          // onMouseEnter={() => setTool("Go to Dashboard")}
          // onMouseLeave={() => setTool(null)}
          className="w-[40px] h-[30px] cursor-pointer relative -ml-[6px]"
        />
        {/* {tool === "Go to Dashboard" && (
          <div className=" absolute -bottom-4 px-2 bg-gray-600 text-white z-50 text-xs rounded-sm ">
            {tool}
          </div>
        )} */}

        <div className="h-10 w-[1px] bg-gray-300 ml-[13px] z-50"></div>
        {/* <img
          src={Header_editor}
          alt="something"
          className="w-7 ml-[8px] cursor-pointer opacity-85"
        /> */}
        <div className="w-7 h-7 ml-[8px] cursor-pointer bg-gray-100 rounded-md hover:bg-gray-200 flex items-center justify-center ">
          <img src={header_menu} />
        </div>

        <div className="flex flex-col ml-1">
          <div className="text-sm flex items-center justify-start">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={65}
              onFocus={() => setChanging(true)}
              onBlur={() => {
                setChanging(false);
                changeRename(name);
              }}
              style={{ width: `${inputWidth - 15}px` }}
              className="text-sm outline-none"
            />
            {/* Hidden span to measure width */}
            <span
              ref={spanRef}
              className="absolute top-[-9999px] left-[-9999px] whitespace-pre text-sm font-normal"
            >
              {name || " "}
            </span>

            {saving ? (
              <p className="text-[9px] mt-[3px] text-graidient_bottom">
                Saving...
              </p>
            ) : (
              <IoIosCloudDone className="text-graidient_bottom w-[16px] h-[11px]" />
            )}
          </div>
          <p className="text-[10px] bg-gray-50 text-gray-700 rounded-lg w-fit cursor-default">
            Created By {created}
          </p>
        </div>
      </div>

      <div className="w-[60%] flex items-center justify-end gap-3">
        <button
          onClick={undo}
          className="text-gray-500 bg-gray-100 hover:bg-graidient_bottom p-[7px] rounded-md hover:text-white"
          onMouseEnter={() => setTool("Undo")}
          onMouseLeave={() => setTool(null)}
        >
          <LiaUndoSolid className="w-4 h-4  " />
        </button>
        <button
          onClick={redo}
          onMouseEnter={() => setTool("Redo")}
          onMouseLeave={() => setTool(null)}
          className="text-gray-500 bg-gray-100 hover:bg-graidient_bottom hover:text-white  p-[7px] rounded-md "
        >
          <LiaRedoSolid className="w-4 h-4" />
        </button>
        {/* <button>
          <MdOutlineHistory className="h-6 w-6 text-gray-500" />
        </button> */}
        <div className=" relative">
          <button
            className={`p-[7px] rounded-md  ${
              lock === true
                ? "bg-graidient_bottom text-white"
                : "bg-gray-100 hover:bg-hover_btn"
            }  `}
            onClick={() => setLock(!lock)}
            onMouseEnter={() => setTool("Manage sharing proposal")}
            onMouseLeave={() => setTool(null)}
          >
            {preview === true ? (
              <FiLock
                className={`h-4 w-4 ${lock ? "text-white" : "text-gray-500"} `}
              />
            ) : (
              <FiUnlock
                className={`h-4 w-4 ${lock ? "text-white" : "text-gray-500"} `}
              />
            )}
          </button>{" "}
          {lock && (
            <div
              ref={lockRef}
              className="bg-white border border-gray-300  w-32 absolute z-10 rounded-lg flex flex-col items-center justify-center gap-1 top-9 right-20 px-3     py-2 shadow-gray-400 shadow-lg"
              style={{
                left: "50%",
                transform: "translate(-50%)",
              }}
            >
              <button
                onClick={() => handleLocked(true)}
                className={`text-sm w-full  flex gap-2 items-center justify-start  px-2 rounded-md ${
                  preview ? "bg-graidient_bottom text-white" : "bg-gray-100"
                } `}
              >
                <p className=" h-7 flex items-center justify-center gap-2 ">
                  <FiLock />
                  Locked
                </p>
              </button>
              <button
                onClick={() => handleLocked(false)}
                className={`text-sm flex gap-2 w-full items-center justify-start  px-2 rounded-md ${
                  preview === false
                    ? "bg-graidient_bottom text-white"
                    : "bg-gray-100"
                }  `}
              >
                <p className=" h-7 flex items-center justify-center gap-2 ">
                  <FiUnlock />
                  Unlocked
                </p>
              </button>
            </div>
          )}
        </div>

        {/* <button onClick={() => setMove(true)}>
          <CgFileDocument className="w-5 h-5 text-gray-500" />
        </button> */}
        <div className="relative">
          <button
            className={`p-[7px] rounded-md  relative ${
              notifiacations === true
                ? "bg-graidient_bottom text-white"
                : "bg-gray-100 hover:bg-hover_btn"
            } `}
            onClick={() => setNotification(!notifiacations)}
            onMouseEnter={() => setTool("Notifications")}
            onMouseLeave={() => setTool(null)}
          >
            {/* <div className="h-[6px] w-[6px] bg-graidient_bottom absolute top-[10px] right-[4px] rounded-[50%]"></div> */}
            <IoIosNotificationsOutline
              className={`h-5 w-5   ${
                notifiacations ? "text-white" : "text-gray-500 "
              }`}
            />
          </button>
          {notifiacations && (
            <div
              ref={bellRef}
              className="bg-white border border-gray-300 p-5 w-96 absolute z-10 rounded-lg flex flex-col items-center justify-center gap-1 top-9 right-20    px-2 py-3 shadow-gray-400 shadow-lg"
              style={{
                left: "50%",
                transform: "translate(-50%)",
              }}
            >
              <div className="w-full py-2 border-b border-gray-200">
                <h2 className="ml-3 font-bold">Notifications</h2>
              </div>
              {[1, 2, 3, 4].map((item) => {
                return (
                  <div className="flex justify-between w-full mt-2 py-2 bg-gray-100 rounded-md">
                    <div className="w-[10%]  h-full flex items-start justify-center">
                      <div className="mt-2 w-1 h-1 rounded-[50%] bg-graidient_bottom"></div>
                    </div>
                    <div className="w-[90%]">
                      <p className="font-bold text-sm">
                        New Our new AI Writing Assistant is here
                      </p>
                      <p className="w[90%] text-xs text-gray-500">
                         Introducing Prospero’s AI Writing Assistant! Streamline
                        proposal creation with smart, AI-driven.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="relative">
          <button
            ref={parentRef}
            className={`p-[7px] rounded-md  ${
              menu === true
                ? "bg-graidient_bottom text-white"
                : "bg-gray-100 hover:bg-hover_btn"
            } `}
            onMouseEnter={() => setTool("More Actions")}
            onMouseLeave={() => setTool(null)}
            onClick={() => setMenu(!menu)}
          >
            <BiDotsVerticalRounded
              className={`h-4 w-4 ${menu ? "text-white" : " text-gray-500"}`}
            />
          </button>
          {menu && (
            <div
              ref={menuRef}
              className="bg-white border border-gray-300  w-40 absolute z-10 rounded-lg flex flex-col items-center justify-center gap-1 top-9 right-20     py-3 shadow-gray-400 shadow-lg"
              style={{
                left: "50%",
                transform: "translate(-50%)",
              }}
            >
              <button
                onClick={handleFavorate}
                className={`text-sm  flex gap-2 items-center justify-start w-[90%] px-2 rounded-md ${
                  favorate && "bg-graidient_bottom text-white"
                }  hover:bg-graidient_bottom hover:text-white`}
              >
                <FaRegStar className="hover:text-white" />
                <p className=" h-7 flex items-center justify-center hover:text-white">
                  {!favorate ? "Add to favorite" : "Remove favorate"}
                </p>
              </button>
              <button
                onClick={() => setMenu(false)}
                className="text-sm flex gap-2 items-center justify-start w-[90%] px-2 rounded-md hover:bg-graidient_bottom hover:text-white "
              >
                <BsPinAngle className="hover:text-white" />
                <p className=" h-7 flex items-center justify-center hover:text-white">
                  Pin Document
                </p>
              </button>
              <div className="w-full bg-gray-200 h-[1px] mb-[-2px] "></div>
              {/* <button
                onClick={() => setMenu(false)}
                className="text-sm  flex gap-2 items-center justify-start w-[90%] pl-1 rounded-sm hover:bg-graidient_bottom hover:text-white"
              >
                <RiDeleteBin6Line className="hover:text-white" />
                <p className=" h-7 flex items-center justify-center  hover:text-white">
                  Delete Document
                </p>
              </button> */}
            </div>
          )}
        </div>

        <div className="h-5 w-[2px] bg-gray-300"></div>
        <p
          onMouseEnter={() => setTool("Preview This Document")}
          onMouseLeave={() => setTool(null)}
          className="text-gray-500 cursor-pointer"
        >
          Preview
        </p>
        <button
          onClick={() => setView(true)}
          className={`p-[7px] rounded-md ${
            view === true
              ? "bg-graidient_bottom text-white"
              : "bg-gray-100  hover:bg-hover_btn"
          }`}
        >
          <RiComputerLine className="w-4 h-4 " />
        </button>
        <button
          onClick={() => setView(false)}
          className={`p-[7px] rounded-md ml-[-3px] ${
            view === false
              ? "bg-graidient_bottom text-white"
              : "bg-gray-100  hover:bg-hover_btn"
          }`}
        >
          <HiOutlineDevicePhoneMobile className="w-4 h-4 " />
        </button>
        <div className="relative">
          <button
            onClick={() => {
              setShare(!share);
              setMenu(false);
            }}
            className="bg-footer_gradient_bot text-white px-4 rounded-md py-2 text-center text-sm flex gap-1 items-center justify-center"
          >
            <FaRegShareSquare className="w-3 h-3" />
            Share
          </button>
          {share && (
            <div
              ref={shareRef}
              className="bg-white border border-gray-300 p-5 w-80 absolute top-10 z-10 right-0 rounded-lg flex flex-col items-center justify-center gap-1"
            >
              <h2 className="text-md font-bold">
                Share & Download Your Proposal
              </h2>
              <p className="w-[85%] text-xs text-center text-gray-400">
                Easily share your proposal link or download it in your preferred
                format.
              </p>
              <div className="border-[1px] w-[90%] rounded-md border-gray-200 flex items-center justify-between pl-2  gap-2 mt-2">
                <Link to={`/view/${id}`}>
                  <p className="text-xs text-blue-600">
                    http://localhost:5173/view
                  </p>
                </Link>
                <button
                  onClick={handleCopy}
                  className="relative flex items-center justify-center gap-1 text-graidient_bottom h-full px-2 py-2 text-sm rounded-r-md"
                  style={{
                    backgroundColor: "rgba(247, 231, 237, 1)",
                  }}
                >
                  {copySuccess ? copySuccess : "Copy"}
                  <RiLink className="w-4 h-4" />
                </button>
              </div>
              <div
                onClick={handleGenerateWord}
                className="relative border-[1px] rounded-md w-[90%] py-2 border-gray-200 flex items-center justify-start pl-2 cursor-pointer  gap-3 mt-2"
              >
                <img src={word} alt="no" />
                <a className="text-sm text-gray-500 ">Word Document</a>
                <GrDownload className=" absolute right-3 text-gray-400" />
              </div>
              <div
                onClick={handleGeneratePdf}
                className="relative border-[1px] rounded-md w-[90%] py-2 border-gray-200 flex items-center justify-start pl-2  gap-3 mt-2 cursor-pointer"
              >
                <img src={pdf} alt="no" />
                <a className="text-sm text-gray-500 ">PDF Document</a>
                <GrDownload className=" absolute right-3 text-gray-400" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditorHeader;
