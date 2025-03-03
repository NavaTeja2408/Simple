import React, { useRef, useState } from "react";
import heading_sidebar from "../../../assets/heading_sidebar.png";
import paragraph_side from "../../../assets/paragraph_side.png";
import image_side from "../../../assets/image_side.png";
import breake_side from "../../../assets/breake_side.png";
import code_side from "../../../assets/code_side.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import heading_side from "../../../assets/heading_side.png";
import paragraph_side_2 from "../../../assets/paragraph_side_2.png";
import table_side_2 from "../../../assets/table_side_2.png";
import image_side_2 from "../../../assets/image_side_2.png";
import divide from "../../../assets/divide.png";
import code_side_2 from "../../../assets/code_side_1.png";

import { FiPlus } from "react-icons/fi";
const ContentSideBar = ({
  addHeadingRow,
  addInputRow,
  addImageRow,
  addImageAndParagraph,
  addDoublePara,
  selected,
  addBreakPoint,
  addCodeBlock,
  addTableRow,
  setSign,
  setThirdLevel,
  thirdLevel,
}) => {
  return (
    <div className=" w-[220px]  pr-4  ">
      <button
        onClick={() => setThirdLevel("heading")}
        className={` relative p-2 px-3 w-[95%] rounded-lg flex text-gray-500 mx-3  items-center  
           gap-4 hover:bg-gray-100 ${
             thirdLevel === "heading" && "bg-gray-100"
           }`}
      >
        <img
          src={heading_side}
          className="w-8 rounded-md p-[6px] border border-gray-100 shadow-lg shadow-gray-300"
          alt="heading"
        />
        <p className="text-sm">Heading</p>
        <MdKeyboardArrowRight className="flex absolute right-4 " />
      </button>
      <button
        onClick={() => setThirdLevel("paragraph")}
        className=" relative p-2 px-3 w-[95%] rounded-lg flex text-gray-500 mx-3  items-center  
           gap-4 hover:bg-gray-100 "
      >
        <img
          src={paragraph_side_2}
          className="w-8 rounded-md p-[6px] border border-gray-100 shadow-lg shadow-gray-300"
          alt="heading"
        />
        <p className="text-sm">Paragraph</p>
        <MdKeyboardArrowRight className="flex absolute right-4 " />
      </button>
      {/* <button
        onClick={addDoublePara}
        className=" relative p-2 px-3 w-[95%] rounded-lg flex text-gray-500 m-3 items-center  
           gap-4 hover:bg-gray-100 "
      >
        <img
          src={heading_sidebar}
          className="w-8 rounded-md p-[6px] border border-gray-100 shadow-lg shadow-gray-300"
          alt="heading"
        />
        <p>Double Paragraph</p>
        <FiPlus className="flex absolute right-4 " />
      </button> */}
      {/* <button
        onClick={addImageAndParagraph}
        className="h-20 w-[75%] m-3 flex flex-col items-center justify-center 
            bg-gradient-to-b from-editor_button_top to-editor_button_bot border-[1px] 
            border-[rgba(152 , 152 , 152 , 1)] gap-2 shadow-lg"
        style={{
          border:
            selected === "image_para"
              ? "1px solid rgba(223, 6, 78, 0.3)"
              : "1px solid rgba(152 , 152 , 152 , 1)",
          boxShadow:
            selected === "image_para"
              ? "inset 0px 10px 20px rgba(223, 6, 78, 0.2)"
              : "1px 2px 4px gray",
        }}
      >
        <img src={image_para} className="w-8 h-4" alt="heading" />
        <p className="text-xs w-[60%] text-center">Image & Paragraph</p>
      </button> */}
      <button
        onClick={() => setThirdLevel("table")}
        className=" relative p-2 px-3 w-[95%] rounded-lg flex text-gray-500 mx-3  items-center  
           gap-4 hover:bg-gray-100 "
      >
        <img
          src={table_side_2}
          className="w-8 rounded-md p-[6px] border border-gray-100 shadow-lg shadow-gray-300"
          alt="heading"
        />
        <p className="text-sm">Table</p>
        <MdKeyboardArrowRight className="flex absolute right-4 " />
      </button>
      <button
        onClick={() => setThirdLevel("image")}
        className=" relative p-2 px-3 w-[95%] rounded-lg flex text-gray-500 mx-3  items-center  
           gap-4 hover:bg-gray-100 "
      >
        <img
          src={image_side_2}
          className="w-8 rounded-md p-[6px] border border-gray-100 shadow-lg shadow-gray-300"
          alt="heading"
        />
        <p className="text-sm"> Image</p>
        <MdKeyboardArrowRight className="flex absolute right-4 " />
      </button>
      <button
        onClick={addBreakPoint}
        className=" relative p-2 px-3 w-[95%] rounded-lg flex text-gray-500 mx-3 items-center  
           gap-4 hover:bg-gray-100 "
      >
        <img
          src={divide}
          className="w-8 rounded-md p-[6px] border border-gray-100 shadow-lg shadow-gray-300"
          alt="heading"
        />
        <p className="text-sm">Divider</p>
        <FiPlus className="flex absolute right-4 " />
      </button>

      <button
        onClick={addCodeBlock}
        className=" relative p-2 px-3 w-[95%] rounded-lg flex text-gray-500 mx-3  items-center  
           gap-4 hover:bg-gray-100 "
      >
        <img
          src={code_side_2}
          className="w-8 rounded-md p-[6px] border border-gray-100 shadow-lg shadow-gray-300"
          alt="heading"
        />
        <p className="text-sm">Code</p>
        <FiPlus className="flex absolute right-4 " />
      </button>
      {/* <button
        onClick={() => setSign(true)}
        className=" relative p-2 px-3 w-[95%] rounded-lg flex text-gray-500 mx-3 my-1 items-center  
           gap-4 hover:bg-gray-100 "
      >
        <img
          src={heading_sidebar}
          className="w-8 rounded-md p-[6px] border border-gray-100 shadow-lg shadow-gray-300"
          alt="heading"
        />
        <p>Signiture</p>
        <FiPlus className="flex absolute right-4 " />
      </button> */}
    </div>
  );
};

export default ContentSideBar;
