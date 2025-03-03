import React, { useState, useContext } from "react";
import DropRow from "./DropRow";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { DatabaseContext } from "../../context/DatabaseContext";

const DropCanvas = ({ rows, setRows, preview }) => {
  const [bookmark, setBookmark] = useState(null);
  const [snapshotLink, setSnapshotLink] = useState("");
  const [savedTitile, setSavedTitle] = useState("");
  const [savedLabel, setSavedLabel] = useState("");
  const { user, setUser } = useContext(UserContext);
  const { databaseUrl } = useContext(DatabaseContext);
  const [loading, setLoading] = useState(false);
  // Move row up
  const moveRowUp = (index) => {
    console.log(index);
    if (index > 0) {
      const updatedRows = [...rows];
      const [movedRow] = updatedRows.splice(index, 1);
      updatedRows.splice(index - 1, 0, movedRow);
      setRows(updatedRows);
    }
  };

  // Move row down
  const moveRowDown = (index) => {
    if (index < rows.length - 1) {
      const updatedRows = [...rows];
      const [movedRow] = updatedRows.splice(index, 1);
      updatedRows.splice(index + 1, 0, movedRow);
      setRows(updatedRows);
    }
  };

  // Delete row
  const deleteRow = (index) => {
    const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(updatedRows);
  };

  // Handle drop item (for adding text or input inside rows)
  const handleDropItem = (rowIndex, item) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].content = item.content; // Set the content of the row
    setRows(updatedRows);
  };

  const handleSavedModule = async () => {
    try {
      const temp = [...rows];
      temp[bookmark].bookmark = true;
      setRows(temp);
      await axios
        .post(`${databaseUrl}/api/editor/newgoal`, {
          user_id: user.id,
          name: savedTitile,
          data: temp[bookmark],
          link: snapshotLink,
        })
        .then((res) => {
          console.log(res);
          const temp = { ...user };
          const goals = [...user.goals, res.data];
          temp.goals = goals;
          setUser(temp);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        width: "94%",
        minHeight: "100vh",
        marginBottom: "25px",
        position: "relative",
        padding: "10px",
      }}
      className=" m-7   bg-white shadow-lg shadow-gray-300  "
    >
      {/* Render rows */}
      {rows.map((row, index) => (
        <DropRow
          key={row.id || index}
          row={row}
          rows={rows}
          setRows={setRows}
          index={index}
          moveRowUp={moveRowUp}
          moveRowDown={moveRowDown}
          deleteRow={deleteRow}
          handleDropItem={handleDropItem}
          preview={preview}
          bookmark={bookmark}
          setBookmark={setBookmark}
          setSnapshotLink={setSnapshotLink}
          loading={loading}
          setLoading={setLoading}
        />
      ))}
      <button onClick={() => console.log(rows)}>Show data</button>
      {bookmark !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center p-4 z-[1000]">
          <div className="bg-white  rounded-lg shadow-xl w-[40%] h-[35%] flex flex-col relative">
            <div className="flex flex-col gap-2 items-center justify-center mt-4">
              <label
                className={`w-full flex items-start justify-start ml-16 font-bold `}
              >
                Section Title
              </label>
              <input
                type="text"
                value={savedTitile}
                onChange={(e) => setSavedTitle(e.target.value)}
                placeholder="Enter the Title"
                className="w-[90%] py-2 outline-none rounded-md px-3 border border-gray-300 focus:border-graidient_bottom"
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center mt-4">
              <label className="w-full flex items-start justify-start ml-16 font-bold">
                Label
              </label>
              <input
                type="text"
                value={savedLabel}
                onChange={(e) => setSavedLabel(e.target.value)}
                placeholder="Enter the Label"
                className="w-[90%]  text-sm py-2 outline-none rounded-md px-3 border border-gray-300 focus:border-graidient_bottom"
              />
            </div>
            <div className="w-full flex flex-row gap-4 items-end justify-end mb-3 mr-4 mt-4 pr-6">
              <button
                onClick={() => {
                  setBookmark(null);
                  setSavedTitle("");
                  setSavedLabel("");
                }}
                className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md "
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleSavedModule();

                  setSavedTitle("");
                  setSavedLabel("");
                  setSnapshotLink("");
                  setBookmark(null);
                }}
                className="px-4 py-2 text-white bg-graidient_bottom hover:bg-opacity-90 rounded-md "
                disabled={loading}
              >
                {loading ? "please Wait" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropCanvas;
