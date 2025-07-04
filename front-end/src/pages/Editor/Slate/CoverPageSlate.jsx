import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { Icon } from "@iconify/react";

const CoverPageSlate = ({
  index,
  indexValue,
  setIndexValue,
  selected,
  url,
  onChange,
  preview,
  darkness,
  onChangeDark,
}) => {
  const [loading, setLoading] = useState(false);
  const [temp, setTemp] = useState(0);

  const [show, setShow] = useState(false);
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
      onChange(photo.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[104%] h-[100vh] ml-[-2%]   absolute top-0  ">
      <img
        src={url}
        style={{
          filter: `brightness(${Math.max(0, 1 - darkness * 0.01)})`,
        }}
      />
      {index === selected && preview !== true && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 px-3 h-10 bg-white border border-gray-100 shadow-md  flex flex-row items-center space-x-2 p-2 rounded text-sm">
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
              className="px-1 py-1 flex items-center justify-center gap-2  text-center rounded cursor-pointer text-sm text-lvl_2_txt "
            >
              <TfiReload className="text-md" />
              {loading ? "Loading ..." : "Change image"}
            </label>
          </div>
          <div className="h-7 w-[1px] bg-gray-300"></div>
          <input
            type="number"
            className="appearance-none 
            [&::-webkit-outer-spin-button]:appearance-none 
            [&::-webkit-inner-spin-button]:appearance-none 
            [&::-webkit-inner-spin-button]:m-0
            focus:outline-none
            border border-gray-300 rounded-md px-2 py-1 w-12"
            value={darkness}
            onChange={(e) => onChangeDark(e.target.value)}
          />

          <button className="relative">
            <Icon icon="mdi:square-opacity" width="20" height="20" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CoverPageSlate;
