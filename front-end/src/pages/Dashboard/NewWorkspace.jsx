import React, { useState } from "react";

const NewWorkspace = ({ handleNewWorkspace, setPopup }) => {
  const [color, setColor] = useState("black");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  const handleOnclick = () => {
    if (name === "") {
      alert("Please enter all the details");
      setError(true);
    } else {
      handleNewWorkspace(name, color, users);
    }
  };

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-40 flex justify-center items-center z-50">
      {/* Popup Content */}
      <div
        style={{
          border: error ? "1px red solid" : "none",
        }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg transition-all transform scale-105"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Workspace Details
          </h2>
          <p className="text-sm text-gray-500">
            Provide the Details to Create New Workspace.
          </p>
        </div>

        {/* Input Fields */}
        <div className="space-y-3">
          <div>
            <label
              htmlFor="proposedName"
              className="block text-sm font-medium text-gray-600"
            >
              Enter Workspace Name
            </label>
            <input
              type="text"
              id="Workspace Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="mt-2 w-full px-2 py-2 border border-gray-300 rounded-lg text-gray-800 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Workspace Name"
              style={{
                border: `2px solid ${color}`,
                borderLeft: `6px solid ${color}`,
              }}
            />
          </div>
          <div className="flex flex-col  w-full ">
            <p>You can choose colors for you workspace:</p>
            <div className="flex flex-row gap-3 mt-2 ml-2">
              <div
                onClick={() => setColor("green")}
                className="bg-green-600 rounded-[100%] w-8 h-8 flex items-center justify-center"
              >
                {color === "green" && (
                  <div className="w-3 h-3 rounded-[50%] bg-white"></div>
                )}
              </div>
              <div
                onClick={() => setColor("red")}
                className=" bg-red-600 rounded-[100%] w-8 h-8 flex items-center justify-center"
              >
                {color === "red" && (
                  <div className="w-3 h-3 rounded-[50%] bg-white"></div>
                )}
              </div>
              <div
                onClick={() => setColor("blue")}
                className="bg-blue-600 rounded-[100%] w-8 h-8 flex items-center justify-center"
              >
                {color === "blue" && (
                  <div className="w-3 h-3 rounded-[50%] bg-white"></div>
                )}
              </div>
              <div
                onClick={() => setColor("yellow")}
                className="bg-yellow-600 rounded-[100%] w-8 h-8 flex items-center justify-center"
              >
                {color === "yellow" && (
                  <div className="w-3 h-3 rounded-[50%] bg-white"></div>
                )}
              </div>
              <div
                onClick={() => setColor("orange")}
                className="bg-orange-600 rounded-[100%] w-8 h-8"
              >
                {color === "orange" && (
                  <div className="w-3 h-3 rounded-[50%] bg-white flex items-center justify-center"></div>
                )}
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="acceptedName"
              className="block text-sm font-medium text-gray-600"
            >
              Enter Users Want to Invite
            </label>
            <input
              type="text"
              id="acceptedName"
              className="mt-2 w-full px-2 py-2 border border-gray-300 rounded-lg text-gray-800 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            onClick={() => {
              setUsers([...users, email]);
              setEmail("");
            }}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-300 hover:shadow-md transition-all"
          >
            Add Email
          </button>
          <div className="flex flex-row gap-4">
            {users.map((item, index) => (
              <p className="bg-gray-300 text-sm rounded-xl px-1" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-end gap-4">
          <button
            onClick={() => setPopup(false)}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-300 hover:shadow-md transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleOnclick}
            className="px-6 py-3 bg-graidient_bottom text-white rounded-lg font-medium  hover:shadow-md transition-all"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewWorkspace;
