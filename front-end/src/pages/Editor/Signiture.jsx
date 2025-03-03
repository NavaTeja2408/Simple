import React, { useContext, useState } from "react";
import { StateManageContext } from "../../context/StateManageContext";

const Signature = ({ addSign, rows, setRows }) => {
  const { setSign, signEdit, setSignEdit } = useContext(StateManageContext);
  const [temp, setTemp] = useState(
    signEdit !== null
      ? rows[signEdit].content
      : [
          {
            proposedName: "",
            signed: true,
          },
          {
            acceptedName: "",
            signed: false,
          },
        ]
  );

  const handleInputChange = (index, key, value) => {
    const updatedTemp = [...temp];
    updatedTemp[index][key] = value;
    setTemp(updatedTemp);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      {/* Popup Content */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg transition-all transform scale-105">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-lg font-bold text-gray-800">
            Add Signature Details
          </h2>
          <p className="text-xs text-gray-500">
            Provide the names for proposal and acceptance.
          </p>
        </div>

        {/* Input Fields */}
        <div className="space-y-2">
          <div>
            <label
              htmlFor="proposedName"
              className="block text-sm font-medium text-gray-600"
            >
              Your Name
            </label>
            <input
              type="text"
              id="proposedName"
              value={temp[0].proposedName}
              onChange={(e) =>
                handleInputChange(0, "proposedName", e.target.value)
              }
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="E.g: Jhon"
            />
            <p className="text-xs p-2">
              By clicking <span className="text-graidient_bottom"> Save</span>,
              you agree to electronically sign this proposal and accept its
              terms. This signature is legally binding, just like a handwritten
              one.
            </p>
          </div>

          <div>
            <label
              htmlFor="acceptedName"
              className="block text-sm font-medium text-gray-600"
            >
              Client's Name
            </label>
            <input
              type="text"
              id="acceptedName"
              value={temp[1].acceptedName}
              onChange={(e) =>
                handleInputChange(1, "acceptedName", e.target.value)
              }
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="E.g: Jhon"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-end gap-4">
          <button
            onClick={() => {
              setSign(false);
              setSignEdit(null);
            }}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-300 hover:shadow-md transition-all"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (signEdit !== null) {
                const updated = [...rows];
                updated[signEdit].content = temp;
                setRows(updated);
                setSignEdit(null);
              } else {
                addSign(temp);
              }
              setSign(false);
            }}
            className="px-6 py-3 bg-graidient_bottom text-white rounded-lg font-medium  hover:shadow-md transition-all"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signature;
