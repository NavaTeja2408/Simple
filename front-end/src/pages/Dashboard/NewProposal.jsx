import React, { useContext, useState, useEffect } from "react";
import { StateManageContext } from "../../context/StateManageContext";
import { UserContext } from "../../context/UserContext";
import { DatabaseContext } from "../../context/DatabaseContext";
import { FaRegFolder } from "react-icons/fa";
import axios from "axios";

const NewProposal = ({ handleCreateNewProposal, setPopup }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const { setNewProposal } = useContext(StateManageContext);
  const { user } = useContext(UserContext);
  const { databaseUrl } = useContext(DatabaseContext);
  const [workspaces, setWorkspaces] = useState(null);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const handleOnclick = () => {
    if (name === "" || selected === null) {
      alert("Please enter all the details");
      setError(true);
    } else {
      handleCreateNewProposal(name, selected);
    }
  };

  useEffect(() => {
    if (user?.id && databaseUrl) {
      getWorkspaces();
    }
  }, [user?.id, databaseUrl]);

  const getWorkspaces = async () => {
    try {
      const res = await axios.get(`${databaseUrl}/api/workspace/getall`, {
        params: { user_id: user.id },
      });
      console.log(res);
      setWorkspaces(res.data);
    } catch (error) {
      console.error("Error fetching workspaces:", error);
      setError("Failed to fetch workspaces. Please try again later.");
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
              className="mt-2 w-full px-2 py-2 border border-gray-200 rounded-lg text-gray-800 shadow-sm 0"
              placeholder="Enter Proposal Name"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm">Workspace Select</label>
            <input
              type="text"
              className="w-full py-2 px-2 outline-none border border-gray-200 rounded-lg "
              placeholder="Search for Workspace"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="h-[30vh] w-full overflow-auto">
              {workspaces
                ?.filter((item) =>
                  item.workspaceName
                    .toLowerCase()
                    .includes(search?.toLowerCase() || "")
                )
                .map((item) => (
                  <div
                    onClick={() => setSelected(item._id)}
                    key={item._id}
                    className={` mt-3 mr-3 placeholder:w-[100%] h-14 px-3 py-2 border ${
                      selected === item._id
                        ? "border-graidient_bottom"
                        : "border-gray-100"
                    }  rounded-md flex items-center justify-start gap-2 cursor-pointer `}
                  >
                    <div
                      className={`h-10 w-12  p-2 flex items-center justify-center rounded-md shadow-md shadow-gray-300 `}
                    >
                      <FaRegFolder
                        style={{
                          color: item.workspaceColor,
                        }}
                        className=" h-5 w-5"
                      />
                    </div>
                    <div className="text-sm flex flex-col w-[90%] ">
                      <h2 className=" text-gray-600 font-semibold overflow-hidden whitespace-nowrap text-ellipsis flex items-center justify-start gap-1">
                        <span>{item.workspaceName}</span>
                      </h2>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-end gap-4">
          <button
            onClick={() => setNewProposal(false)}
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
