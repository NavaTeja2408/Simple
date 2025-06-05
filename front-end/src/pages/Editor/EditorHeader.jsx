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
    <div className="w-full flex items-center justify-evenly h-16 px-7 border-b-[1px] border-gray-200 shadow-lg">
      <div className="flex flex-row w-[40%] items-center justify-start gap-2">
        <img src={logo} alt="logo" className="w-[41px] h-[29px]" />
        <img src={Header_editor} alt="something" className="w-7 ml-4" />
        <div className="w-[90%] flex flex-col gap-0.5 ">
          <h3 className="text-sm font-bold flex items-center justify-start gap-2 max-w-[45vw] text-ellipsis ">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                changeRename(e.target.value);
              }}
              style={{ width: `${name.length * 7 + 50}px  ` }}
              className="text-sm font-bold flex items-center justify-start gap-2  outline-none px-1  "
            />

            {saving ? (
              <p className="text-[9px] mt-[3px] text-graidient_bottom">
                saving
              </p>
            ) : (
              <IoIosCloudDone className="text-graidient_bottom" />
            )}
          </h3>
          <p className="text-[10px] bg-gray-200 px-2 rounded-lg w-fit">
            Created By {created}
          </p>
        </div>
      </div>

      <div className="w-[60%] flex items-center justify-end gap-4">
        <button
          onClick={undo}
          className="text-gray-500 bg-gray-100 hover:bg-graidient_bottom p-[7px] rounded-[50%] hover:text-white"
        >
          <GrUndo className="w-4 h-4  " />
        </button>
        <button
          onClick={redo}
          className="text-gray-500 bg-gray-100 hover:bg-graidient_bottom hover:text-white  p-[7px] rounded-[50%] ml-[-10px]"
        >
          <GrRedo className="w-4 h-4" />
        </button>
        {/* <button>
          <MdOutlineHistory className="h-6 w-6 text-gray-500" />
        </button> */}
        <div className="relative">
          <button onClick={() => setLock(!lock)}>
            <LuLockKeyholeOpen
              className={`h-5 w-5 mt-1 ${
                lock ? "text-graidient_bottom" : "text-gray-500"
              } `}
            />
          </button>{" "}
          {lock && (
            <div
              ref={lockRef}
              className="bg-white border border-gray-300  w-36 absolute z-10 rounded-lg flex flex-col items-center justify-center gap-1 top-9 right-20 px-3     py-2 shadow-gray-400 shadow-lg"
              style={{
                left: "50%",
                transform: "translate(-50%)",
              }}
            >
              <button
                onClick={() => handleLocked(true)}
                className={`text-sm w-full  flex gap-2 items-center justify-start  pl-1 rounded-md ${
                  preview ? "bg-graidient_bottom text-white" : "bg-gray-200"
                } hover:bg-gray-300 `}
              >
                <p className=" h-7 flex items-center justify-center gap-2 ">
                  <LuLockKeyhole />
                  Locked
                </p>
              </button>
              <button
                onClick={() => handleLocked(false)}
                className={`text-sm flex gap-2 w-full items-center justify-start  pl-1 rounded-md ${
                  preview === false
                    ? "bg-graidient_bottom text-white"
                    : "bg-gray-200"
                } hover:bg-gray-300 `}
              >
                <p className=" h-7 flex items-center justify-center gap-2 ">
                  <LuLockKeyholeOpen />
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
            className="relative"
            onClick={() => setNotification(!notifiacations)}
          >
            <div className="h-[6px] w-[6px] bg-graidient_bottom absolute top-[10px] right-[4px] rounded-[50%]"></div>
            <IoNotificationsOutline
              className={`h-5 w-5 mt-2  ${
                notifiacations ? "text-graidient_bottom" : "text-gray-500 "
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
            className="p-2 rounded-[50%] bg-gray-100"
            onClick={() => setMenu(!menu)}
          >
            <BsThreeDotsVertical
              className={`h-4 w-4 ${
                menu ? "text-graidient_bottom" : " text-gray-500"
              }`}
            />
          </button>
          {menu && (
            <div
              ref={menuRef}
              className="bg-white border border-gray-300  w-44 absolute z-10 rounded-lg flex flex-col items-center justify-center gap-1 top-9 right-20     py-3 shadow-gray-400 shadow-lg"
              style={{
                left: "50%",
                transform: "translate(-50%)",
              }}
            >
              <button
                onClick={handleFavorate}
                className={`text-sm  flex gap-2 items-center justify-start w-[90%] pl-1 rounded-md ${
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
                className="text-sm flex gap-2 items-center justify-start w-[90%] pl-1 rounded-md hover:bg-graidient_bottom hover:text-white "
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
        <p className="text-graidient_bottom">Preview</p>
        <button>
          <RiComputerLine className="w-6 h-5 text-gray-600" />
        </button>
        <button className="ml-[-10px]">
          <CiMobile1 className="w-6 h-6 text-gray-600" />
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
              <p className="w-[80%] text-xs text-center text-gray-500">
                Easily share your proposal link or download it in your preferred
                format.
              </p>
              <div className="border-[1px] w-[90%] rounded-md border-gray-600 flex items-center justify-between pl-2  gap-2 mt-2">
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
                className="border-[1px] rounded-md w-[90%] py-2 border-gray-600 flex items-center justify-start pl-2 cursor-pointer  gap-3 mt-2"
              >
                <img src={word} alt="no" />
                <a className="text-sm text-gray-500 ">Word Document</a>
              </div>
              <div
                onClick={handleGeneratePdf}
                className="border-[1px] rounded-md w-[90%] py-2 border-gray-600 flex items-center justify-start pl-2  gap-3 mt-2 cursor-pointer"
              >
                <img src={pdf} alt="no" />
                <a className="text-sm text-gray-500 ">PDF Document</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditorHeader;
