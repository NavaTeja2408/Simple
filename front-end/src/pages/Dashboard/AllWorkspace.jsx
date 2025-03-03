import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { DatabaseContext } from "../../context/DatabaseContext";
import NewWorkspace from "./NewWorkspace";

const AllWorkspace = () => {
  const { user } = useContext(UserContext);
  const { databaseUrl } = useContext(DatabaseContext);
  const navigate = useNavigate();
  const [workspaces, setWorkspaces] = useState([]);
  const [error, setError] = useState(null);
  const [popup, setPopup] = useState(false);

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

  const handleNewWorkspace = async (name, color, users) => {
    try {
      const res = await axios.post(`${databaseUrl}/api/workspace/new`, {
        user_id: user.id,
        workspaceName: name,
        workspaceColor: color,
        users: users,
      });
      setWorkspaces([...workspaces, res.data]);
    } catch (error) {
      console.error("Error fetching workspaces:", error);
      setError("Failed to fetch workspaces. Please try again later.");
    } finally {
      setPopup(false);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-7">
      {popup && (
        <NewWorkspace
          handleNewWorkspace={handleNewWorkspace}
          setPopup={setPopup}
        />
      )}
      <button
        onClick={() => setPopup(true)}
        className="bg-graidient_bottom text-white m-4 p-3 rounded-md flex shadow-lg shadow-graidient_bottom"
      >
        Create New Workspace
      </button>
      <h1>All Workspaces</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {workspaces.map((workspace) => (
          <li key={workspace._id}>
            {workspace.workspaceName}
            <button
              className="ml-2 p-2 bg-gray-200"
              onClick={() => navigate(`/workspace/${workspace._id}`)}
            >
              Open
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllWorkspace;
