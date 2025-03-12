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

import Footer from "../../assets/Footer.png";
import Sidebar_header from "../../assets/Sidebar_header.png";
import margin from "../../assets/margin.png";
import color from "../../assets/color.png";
import typography from "../../assets/typography.png";

import ContentSideBar from "./SideBarComponents/ContentSideBar";
import { FaAngleDoubleLeft } from "react-icons/fa";
import single_para from "../../assets/single_para.png";
import double_para from "../../assets/double_para.png";
import { StateManageContext } from "../../context/StateManageContext";

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
}) => {
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

  const renderHeadingLinks = (items, index, prefix = "") => {
    return items?.flatMap((item, idx) =>
      (item.type === "heading-one" ||
        item.type === "heading-two" ||
        item.type === "heading-three") &&
      item.children
        ? item.children.map(
            (child, childIdx) =>
              child.text !== "" && (
                <p
                  onClick={() => setScrollIndex(index)}
                  className={`px-1 mt-[1px] cursor-pointer hover:text-black flex gap-1 items-start ${
                    item.type === "heading-one"
                      ? "text-gray-700 text-md font-semibold"
                      : "text-gray-500"
                  }`}
                  key={`${index}-${prefix}-${idx}-${childIdx}`}
                >
                  <FaAngleDoubleLeft className="rotate-180 mt-1" />
                  <span className="flex-1 w-[90%] break-words">
                    {child.text}
                  </span>
                </p>
              )
          )
        : []
    );
  };

  return (
    <div className="flex flex-row">
      <div className="max-w-20 relative h-screen flex flex-col border-r-[1px] border-gray-300 ">
        <div
          onClick={() => setActive("elements")}
          className="flex p-1  flex-col w-full h-14   cursor-pointer items-center justify-center "
          style={{
            backgroundColor:
              active === "elements"
                ? "rgba(236, 236, 236, 1)"
                : active === "content-3"
                ? "rgba(236, 236, 236, 1)"
                : active === "table-3"
                ? "rgba(236, 236, 236, 1)"
                : active === "goal-3"
                ? "rgba(236, 236, 236, 1)"
                : "white",
            borderRight:
              active === "elements"
                ? "4px solid rgba(223, 6, 78, 1)"
                : active === "content-3"
                ? "4px solid rgba(223, 6, 78, 1)"
                : active === "table-3"
                ? "4px solid rgba(223, 6, 78, 1)"
                : active === "goal-3"
                ? "4px solid rgba(223, 6, 78, 1)"
                : "white",
          }}
        >
          <img src={Elements} alt="plus" className="w-[60%]" />
        </div>
        <div
          onClick={() => setActive("outline")}
          className="flex p-2 flex-col w-full h-14   cursor-pointer items-center justify-center"
          style={{
            backgroundColor:
              active === "outline" ? "rgba(236, 236, 236, 1)" : "white",
            borderRight:
              active === "outline" ? "4px solid rgba(223, 6, 78, 1)" : "white",
          }}
        >
          <img src={Outline} alt="plus" className="w-[60%]" />
        </div>
        <div
          onClick={() => setActive("layout")}
          className="flex  flex-col w-full h-14   cursor-pointer items-center justify-center "
          style={{
            backgroundColor:
              active === "layout" || active === "margin-3"
                ? "rgba(236, 236, 236, 1)"
                : "white",
            borderRight:
              active === "layout" || active === "margin-3"
                ? "4px solid rgba(223, 6, 78, 1)"
                : "white",
          }}
        >
          <img src={Layout} alt="plus" className="w-[80%]" />
        </div>
        <div
          onClick={() => setActive("themes")}
          className="flex  flex-col w-full h-14   cursor-pointer items-center justify-center "
          style={{
            backgroundColor:
              active === "themes" ||
              active === "typography-3" ||
              active === "colors-3"
                ? "rgba(236, 236, 236, 1)"
                : "white",
            borderRight:
              active === "themes" ||
              active === "typography-3" ||
              active === "colors-3"
                ? "4px solid rgba(223, 6, 78, 1)"
                : "white",
          }}
        >
          <img src={Themes} alt="plus" className="w-[80%]" />
        </div>
        <div
          onClick={() => setActive("layers")}
          className="flex  flex-col w-full h-14 cursor-pointer items-center justify-center "
          style={{
            backgroundColor:
              active === "layers" ? "rgba(236, 236, 236, 1)" : "white",
            borderRight:
              active === "layers" ? "4px solid rgba(223, 6, 78, 1)" : "white",
          }}
        >
          <img src={Layers} alt="plus" className="w-[80%]" />
        </div>
        <div
          onClick={() => setActive("content")}
          className="flex  flex-col w-full h-14   cursor-pointer items-center justify-center "
          style={{
            backgroundColor:
              active === "content" ? "rgba(236, 236, 236, 1)" : "white",
            borderRight:
              active === "content" ? "4px solid rgba(223, 6, 78, 1)" : "white",
          }}
        >
          <img src={Content} alt="plus" className="w-[80%]" />
        </div>
        <div
          onClick={() => setActive("history")}
          className="flex  flex-col w-full h-14   cursor-pointer items-center justify-center "
          style={{
            backgroundColor:
              active === "history" ? "rgba(236, 236, 236, 1)" : "white",
            borderRight:
              active === "history" ? "4px solid rgba(223, 6, 78, 1)" : "white",
          }}
        >
          <img src={History} alt="plus" className="w-[80%]" />
        </div>
        <div className="flex  flex-col absolute bottom-20 w-full h-14   cursor-pointer items-center justify-center ">
          <img src={help} alt="plus" className="w-[100%]" />
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
        <div className="w-[240px] h-screen pr-4 border-r-2 border-gray-200  pb-10 scrollbar-thin flex flex-col">
          <p className="w-full text-start p-2 px-2 text-gray-400 mb-1 ">
            Outline
          </p>
          <div className="w-full h-screen break-words pl-2 scrollbar-thin flex flex-col overflow-y-auto ">
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
        <div className="grid grid-cols-2 w-[240px] h-[65%] pr-4   ">
          <button
            onClick={() => setActive("margin-3")}
            className="h-20 w-[75%]   m-3 flex flex-col items-center justify-center 
            bg-gradient-to-b from-editor_button_top to-editor_button_bot 
           gap-2 shadow-lg"
            style={{
              border: "1px solid rgba(152 , 152 , 152 , 1)",
              boxShadow: "1px 2px 4px gray",
            }}
          >
            <img src={margin} className="w-6" alt="heading" />
            <p className="text-xs">Margin</p>
          </button>
          <button
            className="h-20 w-[75%] m-3 flex flex-col items-center justify-center 
            bg-gradient-to-b from-editor_button_top to-editor_button_bot  gap-2 shadow-lg"
            style={{
              border:
                selected === "input"
                  ? "1px solid rgba(223, 6, 78, 0.3)"
                  : "1px solid rgba(152 , 152 , 152 , 1)",
              boxShadow:
                selected === "input"
                  ? "inset 0px 10px 20px rgba(223, 6, 78, 0.2)"
                  : "1px 2px 4px gray",
            }}
          >
            <img src={Sidebar_header} className="w-6" alt="heading" />
            <p className="text-xs">Header</p>
          </button>
          <button
            className="h-20 w-[75%] m-3 flex flex-col items-center justify-center 
            bg-gradient-to-b from-editor_button_top to-editor_button_bot border-[1px] 
            border-[rgba(152 , 152 , 152 , 1)] gap-2 shadow-lg"
            style={{
              border:
                selected === "double"
                  ? "1px solid rgba(223, 6, 78, 0.3)"
                  : "1px solid rgba(152 , 152 , 152 , 1)",
              boxShadow:
                selected === "double"
                  ? "inset 0px 10px 20px rgba(223, 6, 78, 0.2)"
                  : "1px 2px 4px gray",
            }}
          >
            <img src={Footer} className="w-6 " alt="heading" />
            <p className="text-xs w-[60%] text-center">Footer</p>
          </button>
        </div>
      ) : active === "themes" ? (
        <div className="grid grid-cols-2 w-[240px] h-[65%] pr-4  ">
          <button
            onClick={() => setActive("typography-3")}
            className="h-20 w-[75%]   m-3 flex flex-col items-center justify-center 
            bg-gradient-to-b from-editor_button_top to-editor_button_bot 
           gap-2 shadow-lg"
            style={{
              border:
                selected === "heading"
                  ? "1px solid rgba(223, 6, 78, 0.3)"
                  : "1px solid rgba(152 , 152 , 152 , 1)",
              boxShadow:
                selected === "heading"
                  ? "inset 0px 10px 20px rgba(223, 6, 78, 0.2)"
                  : "1px 2px 4px gray",
            }}
          >
            <img src={typography} className="w-6" alt="heading" />
            <p className="text-xs">Typography</p>
          </button>
          <button
            onClick={() => setActive("colors-3")}
            className="h-20 w-[75%] m-3 flex flex-col items-center justify-center 
            bg-gradient-to-b from-editor_button_top to-editor_button_bot  gap-2 shadow-lg"
            style={{
              border:
                selected === "input"
                  ? "1px solid rgba(223, 6, 78, 0.3)"
                  : "1px solid rgba(152 , 152 , 152 , 1)",
              boxShadow:
                selected === "input"
                  ? "inset 0px 10px 20px rgba(223, 6, 78, 0.2)"
                  : "1px 2px 4px gray",
            }}
          >
            <img src={color} className="w-6" alt="heading" />
            <p className="text-xs">Color</p>
          </button>
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
              <p>Heading 1</p>
            </div>
            <div
              onClick={() => {
                addHeadingRow("heading-two");
                setThirdLevel("");
              }}
              className="w-[80%] h-24 p-2 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
            >
              <img className="h-[80%] w-[64%]" src={heading_one} />
              <p>Heading 2</p>
            </div>
            <div
              onClick={() => {
                addHeadingRow("heading-three");
                setThirdLevel("");
              }}
              className="w-[80%] h-30 p-2 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
            >
              <img className="h-[78%] w-[58%]" src={heading_one} />
              <p>Heading 3</p>
            </div>
            <div
              onClick={() => {
                addHeadingRow("heading-four");
                setThirdLevel("");
              }}
              className="w-[80%] h-30 p-2 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
            >
              <img className="h-[75%] w-[53%]" src={heading_one} />
              <p>Heading 4</p>
            </div>

            <div
              onClick={() => {
                addHeadingRow("heading-five");
                setThirdLevel("");
              }}
              className="w-[80%] h-30 p-2 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
            >
              <img className="h-[73%] w-[50%]" src={heading_one} />
              <p>Heading 5</p>
            </div>
            <div
              onClick={() => {
                addHeadingRow("heading-six");
                setThirdLevel("");
              }}
              className="w-[80%] h-30 p-2 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
            >
              <img className="h-[70%] w-[45%]" src={heading_one} />
              <p>Heading 6</p>
            </div>
          </div>
        ) : thirdLevel === "paragraph" ? (
          <div
            ref={headingRef}
            className="scrollbar-thin absolute left-0 w-[200px] flex flex-col items-center pt-10 gap-4 h-screen border-r border-gray-300 bg-white z-50 overflow-auto pb-20  "
          >
            <div
              onClick={() => {
                addInputRow();
                setThirdLevel("");
              }}
              className="w-[80%] h-28 p-1 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
            >
              <img className="h-[95%] w-[95%] " src={single_para} />
            </div>
            <div
              onClick={() => {
                addDoublePara();
                setThirdLevel("");
              }}
              className="w-[80%] h-28 p-1 bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
            >
              <img className="h-[95%] w-[95%]" src={double_para} />
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
              <img className="h-[85%] w-[95%] " src={image_in} />
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
              <img className="h-[85%] w-[95%]" src={image_paragraph} />
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
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
