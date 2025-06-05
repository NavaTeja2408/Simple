import React, { useRef, useEffect, useState } from "react";
import ImageAlter from "../../../assets/ImageAlter.png";

import { IoCloudUploadOutline } from "react-icons/io5";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { RxText } from "react-icons/rx";
import {
  FaBold,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
} from "react-icons/fa";

const Image = ({
  data,
  onUpdate,
  height,
  width,
  index,
  indexValue,
  setIndexValue,
  onHeight,
  onWidth,
  onAliegn,
  aliegn,
  captionH,
  discription,
  onCaption,
  preview,
}) => {
  const divRef = useRef();
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");
  const [caption, setCaption] = useState(false);
  const [cHeading, setCHeading] = useState("");
  const [cDiscription, setCDisciption] = useState("");

  // Close menu when clicking outside
  const handleClickOutsideMenu = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIndexValue(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

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
      onUpdate(photo.secure_url); // Call the onUpdate function with the URL
      console.log("Uploaded Image URL:", photo.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={divRef}
      className={`w-full min-h-[100px] flex ${
        aliegn === "right" && width !== "100"
          ? "flex-row-reverse"
          : aliegn === "left" && width !== "100"
          ? "flex-row"
          : "flex-col"
      } ${
        aliegn === "left"
          ? "justify-between"
          : aliegn === "right"
          ? "justify-between"
          : "justify-center"
      } items-center relative `}
      onClick={() => setIndexValue(index)}
    >
      {indexValue === index && preview !== true && (
        <div className="absolute top-2 left-[25%] px-3 h-10 bg-white border border-gray-100 shadow-lg shadow-gray-400 flex flex-row items-center space-x-2 p-2 rounded text-sm">
          {/* Hidden file input */}
          <input
            id={`file-upload-${index}`}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              handleUpload(e);
            }}
          />
          {/* Upload Image Label */}
          <label
            htmlFor={`file-upload-${index}`}
            className="px-1 py-1 flex items-center justify-center gap-2  text-center rounded cursor-pointer text-xs"
          >
            <IoCloudUploadOutline />
            {data === "" ? "Upload Image" : "Change Image"}
          </label>
          <div className="w-[1px] h-7 bg-gray-300"></div>
          {/* Width Input */}
          <div className="relative w-fit">
            <AiOutlineColumnWidth className="absolute left-2 top-1/2 transform -translate-y-1/2 " />
            <select
              value={selected}
              onChange={(e) => onWidth(e.target.value)}
              className="p-1  bg-white outline-none border-[1px] border-gray-200"
            >
              <option value="" hidden></option>
              <option value="100">Container Width</option>
              <option value="50">50% Width</option>
              <option value="25">25% Width</option>
            </select>
          </div>
          <div className="w-[1px] h-7 bg-gray-300"></div>
          <button onClick={() => setCaption(true)}>
            <RxText className="font-bold w-5 h-6" />
          </button>
          <div className="w-[1px] h-7 bg-gray-300"></div>
          <div className="flex items-center justify-center gap-4">
            <button className="ml-1" onClick={() => onAliegn("left")}>
              <FaAlignLeft
                className={`${
                  aliegn === "left" ? "text-black" : "text-gray-400"
                }`}
              />
            </button>
            <button onClick={() => onAliegn("center")}>
              <FaAlignCenter
                className={`${
                  aliegn === "center" ? "text-black" : "text-gray-400"
                }`}
              />
            </button>
            <button onClick={() => onAliegn("right")}>
              <FaAlignRight
                className={`${
                  aliegn === "right" ? "text-black" : "text-gray-400"
                }`}
              />
            </button>
          </div>
        </div>
      )}

      {/* Image Display */}
      {loading ? (
        <h1>Uploading the Image...</h1>
      ) : (
        <img
          src={data ? data : ImageAlter}
          alt="Uploaded"
          style={{
            objectFit: "contain",
            width: `${width}%`,
          }}
        />
      )}
      <div
        style={{
          width: `${
            width === "100" ? width - 20 : width === "50" ? width : 75
          }%`,
        }}
        className={`${width === "100" ? "mt-4" : ""} flex flex-col`}
      >
        {captionH && (
          <h1 className="text-center text-3xl font-bold">{captionH}</h1>
        )}

        {discription && (
          <div className="w-full flex items-center justify-center">
            <p className="text-center text-sm text-gray-600 max-w-[80%] break-words overflow-hidden">
              {discription}
            </p>
          </div>
        )}
      </div>

      {caption && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center p-4 z-[1000]">
          <div className="bg-white rounded-lg shadow-xl w-[40%] min-h-[45%] z-[1050] flex flex-col relative ">
            <div className="flex flex-col gap-2 items-center justify-center mt-4">
              <label
                className={`w-full flex items-start justify-start ml-16 font-bold `}
              >
                Image Caption
              </label>
              <input
                type="text"
                value={cHeading}
                onChange={(e) => setCHeading(e.target.value)}
                placeholder="Enter the caption"
                className="w-[90%] py-2 outline-none rounded-md px-3 border border-gray-300 focus:border-graidient_bottom"
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center mt-4">
              <label className="w-full flex items-start justify-start ml-16 font-bold">
                Description
              </label>
              <textarea
                type="text"
                value={cDiscription}
                onChange={(e) => setCDisciption(e.target.value)}
                placeholder="Enter the Descripion"
                className="w-[90%] h-28 text-sm py-2 outline-none rounded-md px-3 border border-gray-300 focus:border-graidient_bottom"
              />
            </div>
            <div className="w-full flex flex-row gap-4 items-end justify-end mb-3 mr-4 mt-4 pr-6">
              <button
                onClick={() => {
                  setCHeading("");
                  setCDisciption("");
                  setCaption(false);
                }}
                className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md "
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onCaption(cHeading, cDiscription);
                  setCHeading("");
                  setCDisciption("");
                  setCaption(false);
                }}
                className="px-4 py-2 text-white bg-graidient_bottom hover:bg-opacity-90 rounded-md "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Image;
