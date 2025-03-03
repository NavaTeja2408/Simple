import React, { useState } from "react";

const NewProposal = ({ handleCreateNewProposal, setPopup }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleOnclick = () => {
    if (name === "") {
      alert("Please enter all the details");
      setError(true);
    } else {
      handleCreateNewProposal(name);
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
          <h2 className="text-2xl font-bold text-gray-800">Proposal Details</h2>
          <p className="text-sm text-gray-500">
            Provide the Details to Create New Proposal.
          </p>
        </div>

        {/* Input Fields */}
        <div className="space-y-3">
          <div>
            <label
              htmlFor="proposedName"
              className="block text-sm font-medium text-gray-600"
            >
              Enter Propoals Name
            </label>
            <input
              type="text"
              id="Proposal Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="mt-2 w-full px-2 py-2 border border-gray-300 rounded-lg text-gray-800 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Workspace Name"
            />
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

export default NewProposal;
