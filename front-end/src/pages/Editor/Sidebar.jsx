import React, { useState, useRef, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { FiPlus } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Sign_v from "../../assets/Sign_v.png";
import cost_v from "../../assets/cost_v.png";
import table_v_1 from "../../assets/table_v_1.png";
import table_v_2 from "../../assets/table_v_2.png";
import table_v_3 from "../../assets/table_v_3.png";
import table_v_4 from "../../assets/table_v_4.png";
import table_v_5 from "../../assets/table_v_5.png";
import sections_1 from "../../assets/sections_1.png";
import section_2 from "../../assets/section_2.png";
import page_1 from "../../assets/page_1.png";
import sections from "../../assets/sections.png";
import saved from "../../assets/saved.png";
import Elements from "../../assets/Elements.png";
import Outline from "../../assets/Outline.png";
import Layout from "../../assets/Layout.png";
import Layers from "../../assets/Layers.png";
import History from "../../assets/History.png";
import Themes from "../../assets/Themes.png";
import Content from "../../assets/Content.png";
import help from "../../assets/help.png";
import heading_one from "../../assets/heading_one.png";
import image_in from "../../assets/Image_in.png";
import image_paragraph from "../../assets/Image_paragraph.png";
import theme_0 from "../../assets/theme-0.png";
import theme_1 from "../../assets/theme-1.png";
import theme_2 from "../../assets/theme-2.png";
import theme_3 from "../../assets/theme-3.png";
import theme_4 from "../../assets/theme-4.png";
import theme_5 from "../../assets/theme-5.png";

import ContentSideBar from "./SideBarComponents/ContentSideBar";
import { FaAngleDoubleLeft } from "react-icons/fa";
import single_para from "../../assets/single_para.png";
import double_para from "../../assets/double_para.png";
import { StateManageContext } from "../../context/StateManageContext";
import { SketchPicker } from "react-color";
import { IoCloudUploadOutline } from "react-icons/io5";
import para from "../../assets/para.jpeg";
import image_insert from "../../assets/img.jpeg";
import double_para_2 from "../../assets/double_para.jpeg";
import img_para from "../../assets/Img_para.jpeg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { VscHistory } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";
import profile from "../../assets/profile.png";
import { useNavigate } from "react-router-dom";

const Sidebar = ({
  selected,
  addInputRow,
  addHeadingRow,
  addDoublePara,
  addImageAndParagraph,
  addImageRow,
  addBreakPoint,
  addTableRow,
  addCodeBlock,
  active,
  setActive,
  rows,
  setRows,
  settings,
  setSettings,
  addCoverPage,
  preview,
}) => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const section_1_row = {
    id: "f3bb0c8f-c949-4cec-af2b-148bc7aa191c",
    type: "double-para",
    firstContent: [
      { type: "heading-three", children: [{ text: "" }], align: "center" },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
      {
        type: "heading-one",
        align: "center",
        children: [{ text: "Terms & Conditions" }],
      },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
    ],
    secondContent: [
      {
        type: "bulleted-list",
        children: [
          {
            type: "list-item",
            children: [
              {
                text: "By using [Your Website/App Name], you agree to these terms.",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "If you do not agree, please do not use our services.",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "You must be 18 years or older (or meet the legal age in your country).",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "By using our services, you confirm that you meet these requirements.",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "You may need to create an account to access certain features.",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "You are responsible for keeping your login details secure.",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "We can suspend or terminate accounts at our discretion.",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              { text: "Do not use our services for illegal activities." },
            ],
          },
          {
            type: "list-item",
            children: [
              { text: "Do not interfere with or disrupt our services." },
            ],
          },
        ],
      },
    ],
  };

  const section_2_row = {
    id: "83f157c5-66cd-465b-99c6-c9202804ee70",
    type: "double-para",
    firstContent: [
      { type: "heading-three", children: [{ text: "" }], align: "center" },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
      {
        type: "heading-one",
        align: "center",
        children: [{ text: "Main Heading" }],
      },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
      { type: "heading-three", align: "center", children: [{ text: "" }] },
    ],
    secondContent: [
      { type: "heading-two", children: [{ text: "Sub Heading:" }] },
      {
        type: "bulleted-list",
        children: [
          {
            type: "bulleted-list",
            children: [
              {
                type: "list-item",
                children: [
                  {
                    text: "By using [Your Website/App Name], you agree to these terms.",
                  },
                ],
              },
              {
                type: "list-item",
                children: [
                  {
                    text: "If you do not agree, please do not use our services.",
                  },
                ],
              },
              {
                type: "list-item",
                children: [
                  {
                    text: "You must be 18 years or older (or meet the legal age in your country).",
                  },
                ],
              },
              {
                type: "list-item",
                children: [
                  {
                    text: "By using our services, you confirm that you meet these requirements.",
                  },
                ],
              },
              {
                type: "list-item",
                children: [
                  {
                    text: "You may need to create an account to access certain features.",
                  },
                ],
              },
              {
                type: "list-item",
                children: [
                  {
                    text: "You are responsible for keeping your login details secure.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const page_1_row = [
    {
      id: "5a5d11fd-4811-470b-91fb-8222b82734d3",
      type: "image",
      content:
        "https://res.cloudinary.com/dojwaepbj/image/upload/v1738236302/wdbs9fvjse52t5fiw7fd.jpg",
      height: "400",
      width: "100",
    },
    {
      id: "59144b23-895e-4ed9-bb47-701a9369f2cf",
      type: "heading",
      size: "heading-one",
      content: [
        {
          type: "heading-one",
          align: "center",
          children: [{ text: "HEADING", bold: true, underline: true }],
        },
      ],
    },
    {
      id: "63b74220-36a1-4670-8229-64ba7c2435a4",
      type: "double-para",
      firstContent: [
        { type: "heading-two", children: [{ text: "" }], align: "center" },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        {
          type: "heading-one",
          align: "center",
          children: [{ text: "Overview" }],
        },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
      ],
      secondContent: [
        {
          type: "paragraph",
          children: [
            {
              text: "The stars don’t care about our little problems, yet we still look up and find comfort in them. Time moves strangely when you're lost in thought—minutes stretch, and hours vanish. A cup of coffee in the morning feels like a small reset button for the brain, while the sound of rain hitting the window at night becomes nature’s own lullaby. If trees could talk, they’d probably complain about humans breathing all their hard work. Somewhere in the universe, an alien might be staring at the night sky, wondering if we exist. ",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "The internet connects billions of people, yet somehow, loneliness still lingers. Sometimes, the best ideas come when you’re not even trying to think, and a blank page can be either terrifying or exciting, depending on how you look at it. If dreams are just random brain signals, why do some feel more real than reality?",
            },
          ],
        },
      ],
    },
    {
      id: "ef8ba667-ce78-490a-b1a4-c2fcfbb39c07",
      type: "double-para",
      firstContent: [
        { type: "heading-three", children: [{ text: "" }], align: "center" },
        { type: "heading-three", align: "center", children: [{ text: "" }] },
        { type: "heading-three", align: "center", children: [{ text: "" }] },
        { type: "heading-three", align: "center", children: [{ text: "" }] },
        { type: "heading-three", align: "center", children: [{ text: "" }] },
        {
          type: "heading-one",
          align: "center",
          children: [{ text: "Terms & Conditions" }],
        },
        { type: "heading-three", align: "center", children: [{ text: "" }] },
        { type: "heading-three", align: "center", children: [{ text: "" }] },
        { type: "heading-three", align: "center", children: [{ text: "" }] },
        { type: "heading-three", align: "left", children: [{ text: "" }] },
        { type: "heading-three", align: "center", children: [{ text: "" }] },
      ],
      secondContent: [
        {
          type: "bulleted-list",
          children: [
            {
              type: "list-item",
              children: [
                {
                  text: "By using [Your Website/App Name], you agree to these terms.",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  text: "If you do not agree, please do not use our services.",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  text: "You must be 18 years or older (or meet the legal age in your country).",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  text: "By using our services, you confirm that you meet these requirements.",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  text: "You may need to create an account to access certain features.",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  text: "You are responsible for keeping your login details secure.",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  text: "We can suspend or terminate accounts at our discretion.",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                { text: "Do not use our services for illegal activities." },
              ],
            },
            {
              type: "list-item",
              children: [
                { text: "Do not interfere with or disrupt our services." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "b8172e74-be46-45aa-a360-8305c3e3da69",
      type: "brake",
      content: "",
    },
  ];

  const [thirdLevel, setThirdLevel] = useState("");
  const headingRef = useRef(null);
  const [showPicker, setShowPicker] = useState(false);
  const handleClickOutsideHeading = (event) => {
    if (headingRef.current && !headingRef.current.contains(event.target)) {
      setThirdLevel("");
    }
  };

  const {
    setSign,
    setPriceTerms,
    setCostModeule,
    scrollIndex,
    setScrollIndex,
  } = useContext(StateManageContext);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideHeading);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideHeading);
    };
  }, []);

  const colorRef = useRef();
  const colorButtonRef = useRef();

  const handleClickOutsideColor = (event) => {
    if (
      colorRef.current &&
      !colorRef.current.contains(event.target) &&
      colorButtonRef.current &&
      !colorButtonRef.current.contains(event.target)
    ) {
      setShowPicker(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideColor);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideColor);
    };
  }, []);
  const navigate = useNavigate();
  const renderHeadingLinks = (items, index, prefix = "") => {
    return items?.flatMap((item, idx) =>
      (item.type === "heading-one" ||
        item.type === "heading-two" ||
        item.type === "heading-three") &&
      item.children
        ? item.children.map(
            (child, childIdx) =>
              child.text !== "" && (
                <div className="w-full  text-ellipsis flex items-center justify-start px-1 ">
                  <FaAngleDoubleLeft className="rotate-180 p-[2px] text-gray-400 mt-1 mr-1 " />
                  <p
                    onClick={() => setScrollIndex(index)}
                    className={`w-[95%] mt-[1px] overflow-hidden text-ellipsis cursor-pointer hover:text-black whitespace-nowrap ${
                      item.type === "heading-one"
                        ? "text-gray-700 text-md font-semibold"
                        : "text-gray-500"
                    }`}
                    key={`${index}-${prefix}-${idx}-${childIdx}`}
                  >
                    {child.text}
                  </p>
                </div>
              )
          )
        : []
    );
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      alert("Please select an image first!");
      return;
    }

    // Cloudinary details
    setLoading(true);
    const cloudName = "dojwaepbj"; // Replace with your Cloudinary cloud name
    const uploadPreset = "simple_quotes"; // Replace with your upload preset

    // Create FormData object
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      // Upload image to Cloudinary
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const photo = await response.json();
      // console.log(photo.secure_url);
      // console.log("Uploaded Image URL:", photo.secure_url);
      if (rows[0]?.type === "cover") {
        rows[0].content = photo.secure_url;
        console.log(photo.secure_url);
      } else {
        addCoverPage(photo.secure_url);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
      setThirdLevel("");
    }
  };

  return (
    <div className="flex flex-row">
      {preview === true ? (
        <div></div>
      ) : (
        <div className="flex flex-row be-vietnam-pro-regular">
          {" "}
          <div className="w-20 relative h-screen flex flex-col border-r-[1px] gap-2 border-gray-300 pt-2 ">
            <div
              onClick={() => setActive("elements")}
              className="flex p-1  flex-col w-full h-14 text-[12px] text-gray-500 cursor-pointer items-center justify-center  "
            >
              {/* <img src={Elements} alt="plus" className="w-[60%]" /> */}
              <div
                style={{
                  backgroundColor:
                    active === "elements" ||
                    active === "content-3" ||
                    active === "table-3" ||
                    active === "goal-3"
                      ? "rgba(255, 206, 216, 0.2)"
                      : "rgba(250, 250, 250, 1)",
                }}
                className="p-1 rounded-md "
              >
                <IoMdAddCircleOutline className="w-5 h-5" />
              </div>

              <p
                style={{
                  color:
                    active === "elements" ||
                    active === "content-3" ||
                    active === "table-3" ||
                    active === "goal-3"
                      ? "rgba(223, 6, 78, 1)"
                      : "rgba(172, 172, 172, 1)",
                }}
              >
                Elements
              </p>
            </div>
            <div
              onClick={() => setActive("outline")}
              className="flex p-1  flex-col w-full h-14 text-[12px] text-gray-500 cursor-pointer items-center justify-center  "
            >
              <div
                style={{
                  backgroundColor:
                    active === "outline"
                      ? "rgba(255, 206, 216, 0.2)"
                      : "rgba(250, 250, 250, 1)",
                }}
                className="p-1 rounded-md "
              >
                <AiOutlineBars className="w-5 h-5" />
              </div>

              <p
                style={{
                  color:
                    active === "outline"
                      ? "rgba(223, 6, 78, 1)"
                      : "rgba(172, 172, 172, 1)",
                }}
              >
                Outline
              </p>
            </div>
            <div
              onClick={() => setActive("layout")}
              className="flex p-1  flex-col w-full h-14 text-[12px] text-gray-500 cursor-pointer items-center justify-center  "
            >
              <div
                style={{
                  backgroundColor:
                    active === "layout"
                      ? "rgba(255, 206, 216, 0.2)"
                      : "rgba(250, 250, 250, 1)",
                }}
                className="p-1 rounded-md "
              >
                <LuLayoutPanelLeft className="w-5 h-5" />
              </div>

              <p
                style={{
                  color:
                    active === "layout"
                      ? "rgba(223, 6, 78, 1)"
                      : "rgba(172, 172, 172, 1)",
                }}
              >
                Layout
              </p>
            </div>
            <div
              onClick={() => setActive("tracking")}
              className="flex p-1  flex-col w-full h-14 text-[12px] text-gray-500 cursor-pointer items-center justify-center  "
            >
              <div
                style={{
                  backgroundColor:
                    active === "tracking"
                      ? "rgba(255, 206, 216, 0.2)"
                      : "rgba(250, 250, 250, 1)",
                }}
                className="p-1 rounded-md "
              >
                <HiOutlineDocumentChartBar className="w-5 h-5" />
              </div>

              <p
                style={{
                  color:
                    active === "tracking"
                      ? "rgba(223, 6, 78, 1)"
                      : "rgba(172, 172, 172, 1)",
                }}
              >
                Doc Track
              </p>
            </div>

            <div
              onClick={() => setActive("history")}
              className="flex p-1  flex-col w-full h-14 text-[12px] text-gray-500 cursor-pointer items-center justify-center  "
            >
              <div
                style={{
                  backgroundColor:
                    active === "history"
                      ? "rgba(255, 206, 216, 0.2)"
                      : "rgba(250, 250, 250, 1)",
                }}
                className="p-1 rounded-md "
              >
                <VscHistory className="w-5 h-5" />
              </div>

              <p
                style={{
                  color:
                    active === "history"
                      ? "rgba(223, 6, 78, 1)"
                      : "rgba(172, 172, 172, 1)",
                }}
              >
                History
              </p>
            </div>
            <div className="w-full h-40 absolute bottom-20 pb-5 left-0 flex flex-col items-center justify-end">
              <div className="flex p-1  flex-col w-full h-14 text-[12px] text-gray-500 cursor-pointer items-center justify-center  ">
                <div className="p-1 rounded-md ">
                  <IoIosHelpCircleOutline className="w-5 h-5" />
                </div>

                <p>Help</p>
              </div>
              <div className="flex p-1  flex-col w-full h-14 text-[12px] text-gray-500 cursor-pointer items-center justify-center  ">
                <div
                  className="p-1 rounded-md  "
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  <img
                    src={user.avatar ? user.avatar : profile}
                    className="w-5 h-5 z-50"
                  />
                </div>
              </div>
            </div>
          </div>
          {active === "elements" ? (
            <div className="w-[220px] overflow-x-hidden h-screen pr-4 border-r-2 border-gray-200 overflow-auto pb-20 scrollbar-thin  ">
              <button
                className=" p-2 w-full   mx-3  flex  items-center justify-between
           gap-2 "
              >
                <p className="text-sm text-gray-400">Basics</p>
              </button>

              <div className="w-[220px]">
                <ContentSideBar
                  addHeadingRow={addHeadingRow}
                  addImageRow={addImageRow}
                  addInputRow={addInputRow}
                  addDoublePara={addDoublePara}
                  addImageAndParagraph={addImageAndParagraph}
                  selected={selected}
                  addBreakPoint={addBreakPoint}
                  addTableRow={addTableRow}
                  addCodeBlock={addCodeBlock}
                  setSign={setSign}
                  setThirdLevel={setThirdLevel}
                  thirdLevel={thirdLevel}
                />
              </div>
              <div className="w-full h-[1px] ml-2  bg-gray-300 mt-3"></div>
              <div className="w-[220px]">
                <button
                  className=" p-2 w-full   mx-3 my-1 flex  items-center justify-between
           gap-2 "
                >
                  <p className="text-sm text-gray-400">Assets</p>
                </button>
                <div className="pr-4 w-[220px]">
                  <button
                    onClick={() => setThirdLevel("cover")}
                    className=" relative p-2 px-3 w-[95%] rounded-lg flex text-gray-500 mx-3  items-center  
           gap-4 hover:bg-gray-100 "
                  >
                    <img
                      src={sections}
                      className="w-8 rounded-md p-[6px] border border-gray-100 shadow-lg shadow-gray-300"
                      alt="heading"
                    />
                    <p className="text-sm">Cover Page</p>
                    <MdKeyboardArrowRight className="flex absolute right-4 " />
                  </button>
                  <button
                    onClick={() => setThirdLevel("sections")}
                    className=" relative p-2 px-3 w-[95%] rounded-lg flex text-gray-500 mx-3  items-center  
           gap-4 hover:bg-gray-100 "
                  >
                    <img
                      src={sections}
                      className="w-8 rounded-md p-[6px] border border-gray-100 shadow-lg shadow-gray-300"
                      alt="heading"
                    />
                    <p className="text-sm">Sections</p>
                    <MdKeyboardArrowRight className="flex absolute right-4 " />
                  </button>
                  <button
                    onClick={() => setThirdLevel("saved")}
                    className=" relative p-2 px-3 w-[95%] rounded-lg flex text-gray-500 mx-3 items-center  
           gap-4 hover:bg-gray-100 "
                  >
                    <img
                      src={saved}
                      className="w-8 rounded-md p-[6px] border border-gray-100 shadow-lg shadow-gray-300"
                      alt="heading"
                    />
                    <p className="text-sm">My Content</p>
                    <MdKeyboardArrowRight className="flex absolute right-4 " />
                  </button>
                </div>
              </div>
              <div className="w-full h-[1px] ml-2  bg-gray-300 mt-3"></div>
              <div className="w-[220px]">
                <button
                  className=" p-2 w-full   mx-3 my-1 flex  items-center justify-between
           gap-2 "
                >
                  <p className="text-sm text-gray-400">Cost Module</p>
                </button>
                <div className="pr-4 w-[220px]">
                  <button
                    onClick={() => setCostModeule(true)}
                    className=" relative p-2 px-3 w-[95%] rounded-lg flex text-gray-500 mx-3 items-center  
           gap-4 hover:bg-gray-100 "
                  >
                    <img
                      src={cost_v}
                      className="w-8 rounded-md p-[6px] border border-gray-100 shadow-lg shadow-gray-300"
                      alt="heading"
                    />
                    <p className="text-sm">Costing</p>
                    <FiPlus className="flex absolute right-4 " />
                  </button>
                  <button
                    onClick={() => setPriceTerms(true)}
                    className=" relative p-2 px-3 w-[95%] rounded-lg flex text-gray-500 mx-3  items-center  
           gap-4 hover:bg-gray-100 "
                  >
                    <img
                      src={cost_v}
                      className="w-8 rounded-md p-[6px] border border-gray-100 shadow-lg shadow-gray-300"
                      alt="heading"
                    />
                    <p className="text-sm">Price Terms</p>
                    <FiPlus className="flex absolute right-4 " />
                  </button>
                </div>
              </div>
              <div className="w-full h-[1px] ml-2  bg-gray-300 mt-3"></div>
              <div className="w-[220px]">
                <button
                  className=" p-2 w-full   mx-3 my-1 flex  items-center justify-between
           gap-2 "
                >
                  <p className="text-sm text-gray-400">Legal</p>
                </button>
                <div className="pr-4 w-[220px]">
                  <button
                    onClick={() => setSign(true)}
                    className=" relative p-2 px-3 w-[95%] rounded-lg flex text-gray-500 mx-3  items-center  
           gap-4 hover:bg-gray-100 "
                  >
                    <img
                      src={Sign_v}
                      className="w-8 rounded-md p-[6px] border border-gray-100 shadow-lg shadow-gray-300"
                      alt="heading"
                    />
                    <p className="text-sm">Signiture</p>
                    <FiPlus className="flex absolute right-4 " />
                  </button>
                </div>
              </div>

              {/* <button
            onClick={() => setCostModeule(true)}
            className="h-20 w-[75%] m-3 flex flex-col items-center justify-center 
            bg-gradient-to-b from-editor_button_top to-editor_button_bot border-[1px] 
            border-sidebar_border gap-2 shadow-lg"
            style={{
              boxShadow: "1px 2px 4px gray",
            }}
          >
            <img src={currency} className="w-6" alt="heading" />
            <p className="text-xs ">Cost Module</p>
          </button>
          <button
            onClick={() => setActive("goal-3")}
            className="h-20 w-[75%] m-3 flex flex-col items-center justify-center 
            bg-gradient-to-b from-editor_button_top to-editor_button_bot border-[1px] 
            border-sidebar_border  shadow-lg"
            style={{
              boxShadow: "1px 2px 4px gray",
            }}
          >
            <img src={goal} className="w-10" alt="heading" />
            <p className="text-xs ">Goal Module</p>
          </button> */}
            </div>
          ) : active === "outline" ? (
            <div className="w-[220px] h-screen pr-4 border-r-2 border-gray-200  pb-10 scrollbar-thin flex flex-col">
              <p className="w-full text-start p-2 px-2 text-gray-400 mb-1 ">
                Outline
              </p>
              <div className="w-full h-screen pl-2 scrollbar-thin flex flex-col overflow-y-auto gap-1 ">
                {rows?.map((row, index) => {
                  if (row.type === "heading") {
                    return renderHeadingLinks(row.content, index);
                  } else if (row.type === "input") {
                    return renderHeadingLinks(row.content, index);
                  } else if (row.type === "double-para") {
                    return [
                      ...renderHeadingLinks(row.firstContent, index, "first"),
                      ...renderHeadingLinks(row.secondContent, index, "second"),
                    ];
                  } else if (row.type === "image-para") {
                    return renderHeadingLinks(row.content, index);
                  }

                  return null;
                })}
              </div>
            </div>
          ) : active === "layout" ? (
            <div className="flex flex-row">
              <div className=" w-[220px] h-screen px-4 py-4 border-r-2 border-gray-200  pb-20 scrollbar-thin flex flex-col overflow-y-scroll overflow-x-hidden  ">
                <h3 className="text-lg text-gray-800 font-semibold ">
                  Typography
                </h3>
                <div className="mt-4">
                  <label className="text-sm text-gray-400 mb-2">
                    Heading Font
                  </label>
                  <select
                    value={settings.heading}
                    onChange={(e) => {
                      const temp = { ...settings };
                      temp.heading = e.target.value;
                      setSettings(temp);
                    }}
                    className="w-full py-1 px-1 outline-none border border-gray-50 rounded-md text-gray-400 text-xs
            "
                  >
                    <option value="arial">Arial</option>
                    <option value="helvetica">Helvetica</option>
                    <option value="poppins">Poppins</option>
                    <option value="montserrat">Montserrat</option>
                    <option value="roboto">Roboto</option>
                    <option value="times-new-roman">Times New Roman</option>
                    <option value="georgia">Georgia</option>
                    <option value="playfair-display">Playfair Display</option>
                    <option value="merriweather">Merriweather</option>
                    <option value="garamond">Garamond</option>
                    <option value="lobster">Lobster</option>
                    <option value="pacifico">Pacifico</option>
                    <option value="bebas-neue">Bebas Neue</option>
                    <option value="anton">Anton</option>
                    <option value="oswald">Oswald</option>
                  </select>
                </div>
                <div className="mt-2 gap-1">
                  <label className="text-sm text-gray-400 mb-2">
                    Body Font
                  </label>
                  <select
                    value={settings.body}
                    onChange={(e) => {
                      const temp = { ...settings };
                      temp.body = e.target.value;
                      setSettings(temp);
                    }}
                    className="w-full py-1 px-1 outline-none border border-gray-50 rounded-md text-gray-400 text-xs"
                  >
                    <option value="arial">Arial</option>
                    <option value="helvetica">Helvetica</option>
                    <option value="poppins">Poppins</option>
                    <option value="montserrat">Montserrat</option>
                    <option value="roboto">Roboto</option>
                    <option value="times-new-roman">Times New Roman</option>
                    <option value="georgia">Georgia</option>
                    <option value="playfair-display">Playfair Display</option>
                    <option value="merriweather">Merriweather</option>
                    <option value="garamond">Garamond</option>
                    <option value="lobster">Lobster</option>
                    <option value="pacifico">Pacifico</option>
                    <option value="bebas-neue">Bebas Neue</option>
                    <option value="anton">Anton</option>
                    <option value="oswald">Oswald</option>
                  </select>
                </div>
                <div className="mt-3 flex items-center justify-between px-3 py-1 border border-gray-200 rounded-md text-xs text-gray-400 ">
                  <label>Header</label>
                  <input
                    className="accent-graidient_bottom "
                    checked={settings.header}
                    onChange={(e) => {
                      const temp = { ...settings };
                      temp.header = e.target.checked;
                      setSettings(temp);
                    }}
                    type="checkbox"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-3 py-1 border border-gray-200 rounded-md text-xs text-gray-400 ">
                  <label>Footer</label>
                  <input
                    className="accent-graidient_bottom "
                    checked={settings.footer}
                    onChange={(e) => {
                      const temp = { ...settings };
                      temp.footer = e.target.checked;
                      setSettings(temp);
                    }}
                    type="checkbox"
                  />
                </div>
                <div>
                  <h3 className="text-lg mt-3 text-gray-800 font-semibold ">
                    Theme Fill
                  </h3>
                  <div
                    ref={colorButtonRef}
                    className="py-1 mt-2 flex   items-center justify-between border border-gray-100"
                    onClick={() => setShowPicker(true)}
                  >
                    <p className=" text-sm">
                      <span className="flex gap-1 px-2 items-center">
                        <div
                          className="w-4 h-4"
                          style={{ backgroundColor: settings.color }}
                        ></div>
                        {settings.color}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg text-gray-800 font-semibold ">
                    Design Theme
                  </h3>
                  <p className="text-gray-400 text-sm mt-3">
                    Select Designh Theme
                  </p>
                  <div className=" grid grid-cols-2 gap-3 mt-4">
                    <img
                      onClick={() => {
                        const temp = { ...settings };
                        temp.theme = 0;
                        setSettings(temp);
                      }}
                      className="h-28 w-[90%]"
                      src={theme_0}
                      alt="sometthing"
                    />
                    <img
                      onClick={() => {
                        const temp = { ...settings };
                        temp.theme = 1;
                        setSettings(temp);
                      }}
                      className="h-28 w-[90%]"
                      src={theme_1}
                      alt="sometthing"
                    />
                    <img
                      onClick={() => {
                        const temp = { ...settings };
                        temp.theme = 2;
                        setSettings(temp);
                      }}
                      className="h-28 w-[90%]"
                      src={theme_2}
                      alt="sometthing"
                    />
                    <img
                      onClick={() => {
                        const temp = { ...settings };
                        temp.theme = 3;
                        setSettings(temp);
                      }}
                      className="h-28 w-[90%]"
                      src={theme_3}
                      alt="sometthing"
                    />
                    <img
                      onClick={() => {
                        const temp = { ...settings };
                        temp.theme = 4;
                        setSettings(temp);
                      }}
                      className="h-28 w-[90%]"
                      src={theme_4}
                      alt="sometthing"
                    />
                    <img
                      onClick={() => {
                        const temp = { ...settings };
                        temp.theme = 5;
                        setSettings(temp);
                      }}
                      className="h-28 w-[90%]"
                      src={theme_5}
                      alt="sometthing"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-[1px] h-screen">
                {showPicker && (
                  <div
                    ref={colorRef}
                    className="absolute top-[25%] -left-1 mt-2 shadow-lg z-50"
                  >
                    <SketchPicker
                      color={settings.color}
                      onChange={(updatedColor) => {
                        const temp = { ...settings };
                        temp.color = updatedColor.hex;
                        setSettings(temp);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div> </div>
          )}
          <div className="w-[1px] h-screen bg-gray-100 relative ">
            {thirdLevel === "heading" ? (
              <div
                ref={headingRef}
                className="scrollbar-thin absolute left-0 w-[200px] flex flex-col items-center pt-10 gap-4 h-screen border-r border-gray-300 bg-white z-50 overflow-auto pb-20  "
              >
                <div
                  onClick={() => {
                    addHeadingRow("heading-one");
                    setThirdLevel("");
                  }}
                  className="w-[80%] h-24 p-2 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[85%] w-[70%] " src={heading_one} />
                  <p>H 1</p>
                </div>
                <div
                  onClick={() => {
                    addHeadingRow("heading-two");
                    setThirdLevel("");
                  }}
                  className="w-[80%] h-24 p-2 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[80%] w-[64%]" src={heading_one} />
                  <p>H 2</p>
                </div>
                <div
                  onClick={() => {
                    addHeadingRow("heading-three");
                    setThirdLevel("");
                  }}
                  className="w-[80%] h-30 p-2 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[78%] w-[58%]" src={heading_one} />
                  <p>H 3</p>
                </div>
                <div
                  onClick={() => {
                    addHeadingRow("heading-four");
                    setThirdLevel("");
                  }}
                  className="w-[80%] h-30 p-2 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[75%] w-[53%]" src={heading_one} />
                  <p>H 4</p>
                </div>

                <div
                  onClick={() => {
                    addHeadingRow("heading-five");
                    setThirdLevel("");
                  }}
                  className="w-[80%] h-30 p-2 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[73%] w-[50%]" src={heading_one} />
                  <p>H 5</p>
                </div>
                <div
                  onClick={() => {
                    addHeadingRow("heading-six");
                    setThirdLevel("");
                  }}
                  className="w-[80%] h-30 p-2 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[70%] w-[45%]" src={heading_one} />
                  <p>H 6</p>
                </div>
              </div>
            ) : thirdLevel === "paragraph" ? (
              <div
                ref={headingRef}
                className="scrollbar-thin absolute left-0 w-[200px] flex flex-col items-center pt-14 gap-10 h-screen border-r border-gray-300 bg-white z-50 overflow-auto pb-20  "
              >
                <div
                  onClick={() => {
                    addInputRow();
                    setThirdLevel("");
                  }}
                  className="w-[80%] relative h-24 p-1 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[85%] w-[95%] " src={para} />
                  <p className="text-gray-500 absolute left-1 top-[-25px] text-sm">
                    Paragraph
                  </p>
                </div>
                <div
                  onClick={() => {
                    addDoublePara();
                    setThirdLevel("");
                  }}
                  className=" relative w-[80%] h-24 p-1 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[85%] w-[95%]" src={double_para_2} />
                  <p className="text-gray-500 absolute left-1 top-[-25px] text-sm">
                    Double Paragraph
                  </p>
                </div>
              </div>
            ) : thirdLevel === "image" ? (
              <div
                ref={headingRef}
                className="scrollbar-thin absolute left-0 w-[200px] flex flex-col items-center pt-10 gap-10 h-screen border-r border-gray-300 bg-white z-50 overflow-auto pb-20  "
              >
                <div
                  onClick={() => {
                    addImageRow();
                    setThirdLevel("");
                  }}
                  className="w-[80%] relative h-24 p-1 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[85%] w-[95%] " src={image_insert} />
                  <p className="text-gray-500 absolute left-1 top-[-25px] text-sm">
                    Image
                  </p>
                </div>
                <div
                  onClick={() => {
                    addImageAndParagraph();
                    setThirdLevel("");
                  }}
                  className=" relative w-[80%] h-24 p-1 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[85%] w-[95%]" src={img_para} />
                  <p className="text-gray-500 absolute left-1 top-[-25px] text-sm">
                    Image & Paragraph
                  </p>
                </div>
              </div>
            ) : thirdLevel === "table" ? (
              <div
                ref={headingRef}
                className="scrollbar-thin absolute left-0 w-[200px] flex flex-col items-center pt-10 gap-4 h-screen border-r border-gray-300 bg-white z-50 overflow-auto pb-20 text-xs text-gray-400 text-center  "
              >
                <div
                  onClick={() => {
                    addTableRow("normal");
                    setThirdLevel("");
                  }}
                  className="w-[80%] h-24 p-2 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[75%] w-[53%]" src={table_v_1} />
                  <p>Basic Layout</p>
                </div>
                <div
                  onClick={() => {
                    addTableRow("alternativerow");
                    setThirdLevel("");
                  }}
                  className="w-[80%] h-24 p-2 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[75%] w-[53%]" src={table_v_2} />
                  <p>Aleternative Row Layout</p>
                </div>
                <div
                  onClick={() => {
                    addTableRow("alternativecol");
                    setThirdLevel("");
                  }}
                  className="w-[80%] h-30 p-2 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[75%] w-[53%]" src={table_v_3} />
                  <p>Aleternative Coloumn Layout</p>
                </div>
                <div
                  onClick={() => {
                    addTableRow("toprow");
                    setThirdLevel("");
                  }}
                  className="w-[80%] h-30 p-2 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[75%] w-[53%]" src={table_v_4} />
                  <p>Top Row Layout</p>
                </div>

                <div
                  onClick={() => {
                    addTableRow("leftcol");
                    setThirdLevel("");
                  }}
                  className="w-[80%] h-30 p-2 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[75%] w-[53%]" src={table_v_5} />
                  <p>Left Coloumn Layout</p>
                </div>
              </div>
            ) : thirdLevel === "sections" ? (
              <div
                ref={headingRef}
                className="scrollbar-thin absolute left-0 w-[200px] flex flex-col items-center pt-10 gap-4 h-screen border-r border-gray-300 bg-white z-50 overflow-auto pb-20 text-xs text-gray-400 text-center  "
              >
                <div
                  onClick={() => {
                    setRows([...rows, section_1_row]);
                    setThirdLevel("");
                  }}
                  className="w-[85%] h-26 p-1 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[100%] w-[100%]" src={sections_1} />
                </div>
                <div
                  onClick={() => {
                    setRows([...rows, section_2_row]);
                    setThirdLevel("");
                  }}
                  className="w-[85%] h-26 p-1 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[100%] w-[100%]" src={section_2} />
                </div>
              </div>
            ) : thirdLevel === "pages" ? (
              <div
                ref={headingRef}
                className=" scrollbar-thinabsolute left-0 w-[200px] flex flex-col items-center pt-10 gap-4 h-screen border-r border-gray-300 bg-white z-50 overflow-auto pb-20 text-xs text-gray-400 text-center  "
              >
                <div
                  onClick={() => {
                    setRows([...rows, ...page_1_row]);
                    setThirdLevel("");
                  }}
                  className="w-[80%] h-44  bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[100%] w-[100%]" src={page_1} />
                </div>
              </div>
            ) : thirdLevel === "saved" ? (
              <div
                ref={headingRef}
                className=" scrollbar-thin absolute left-0 w-[200px] flex flex-col  items-center pt-4  h-screen border-r border-gray-300 bg-white z-50 overflow-auto pb-20  "
              >
                {user?.goals ? (
                  user.goals?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="my-3 w-[95%] bg-gray-100 p-2 flex flex-col items-center justify-center gap-2"
                        onClick={() => {
                          setRows([...rows, ...item.data]);
                          setThirdLevel("");
                        }}
                      >
                        {item.link && (
                          <img
                            src={item.link}
                            alt="No Imahe"
                            className="w-full rounded-md "
                          />
                        )}
                        <p className="text-sm text-gray-500">
                          {item.goalModuleName}
                        </p>
                      </div>
                    );
                  })
                ) : (
                  <div></div>
                )}
              </div>
            ) : thirdLevel === "cover" ? (
              <div
                ref={headingRef}
                className="scrollbar-thin absolute left-0 w-[200px] flex flex-col items-center pt-10 gap-4 h-screen border-r border-gray-300 bg-white z-50 overflow-auto pb-20 text-xs text-gray-400 text-center  "
              >
                <div>
                  <input
                    id={`file-upload`}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      handleUpload(e);
                    }}
                  />
                  {/* Upload Image Label */}
                  <label
                    htmlFor={`file-upload`}
                    className="px-1 py-1 flex items-center justify-center gap-2  text-center rounded cursor-pointer text-xs"
                  >
                    <IoCloudUploadOutline />
                    {loading ? "Loading..." : "Upload Cover Page"}
                  </label>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
