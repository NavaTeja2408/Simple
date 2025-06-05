import React, { useRef, useEffect, useState } from "react";
import ImageAlter from "../../../assets/ImageAlter.png";
import { IoCloudUploadOutline } from "react-icons/io5";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa";

const ForDouble = ({
  data,
  onUpdate,
  height,
  width,
  index,
  aliegn,
  onAliegn,
  onWidth,
  preview,
  selected,
}) => {
  const divRef = useRef();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  // Close menu when clicking outside
  const handleClickOutsideMenu = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setShow(false);
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
      className={`w-full mt-4 min-h-[200px] flex ${
        aliegn === "left"
          ? "justify-start"
          : aliegn === "right"
          ? "justify-end"
          : "justify-center"
      } items-center relative`}
    >
      {/* Settings Panel */}
      {show && preview !== true && (
        <div className="absolute -top-5 left-10 px-3 h-10 bg-white border border-gray-100 shadow-lg shadow-gray-400 flex flex-row items-center space-x-2 p-2 rounded text-sm z-50">
          {/* Hidden file input */}
          <input
            id={`file-upload-${index}`}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleUpload}
          />
          {/* Upload Image Label */}
          <label
            htmlFor={`file-upload-${index}`}
            className="px-1 py-1 flex items-center justify-center gap-2 text-center rounded cursor-pointer text-xs"
          >
            <IoCloudUploadOutline />
            {data === "" ? "Upload Image" : "Change Image"}
          </label>
          <div className="w-[1px] h-7 bg-gray-300"></div>

          {/* Width Selector */}
          <div className="relative w-fit">
            <AiOutlineColumnWidth className="absolute left-2 top-1/2 transform -translate-y-1/2" />
            <select
              value={""} // Changed from `selected` to `width`
              onChange={(e) => onWidth(e.target.value)}
              className="p-1 bg-white outline-none border-[1px] border-gray-200"
            >
              <option value="" hidden></option>
              <option value="100">Container Width</option>
              <option value="50">50% Width</option>
              <option value="25">25% Width</option>
            </select>
          </div>
          <div className="w-[1px] h-7 bg-gray-300"></div>

          {/* Alignment Buttons */}
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
            height: `${height}px`,
            width: `${width}%`, // Width is controlled dynamically
          }}
          onClick={() => setShow(true)} // Show menu when clicking the image
        />
      )}
    </div>
  );
};

export default ForDouble;
