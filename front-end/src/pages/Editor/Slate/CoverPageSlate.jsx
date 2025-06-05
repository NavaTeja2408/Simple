import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const CoverPageSlate = ({
  index,
  indexValue,
  setIndexValue,
  selected,
  url,
  onChange,
  preview,
}) => {
  const [loading, setLoading] = useState(false);
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
      <img src={url} />
      {index === selected && preview !== true && (
        <div className="w-[20%] absolute top-0 shadow-lg h-10 ml-[40%] bg-white flex justify-center items-center gap-4 ">
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
              className="px-1 py-1 flex items-center justify-center gap-2  text-center rounded cursor-pointer "
            >
              <IoCloudUploadOutline />
              {loading ? "Loading ..." : "upload image"}
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoverPageSlate;
