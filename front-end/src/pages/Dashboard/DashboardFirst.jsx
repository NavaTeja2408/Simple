import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { DatabaseContext } from "../../context/DatabaseContext";
import NewProposal from "./NewProposal";

const DashboardFirst = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [popup, setPopup] = useState(false);
  const { databaseUrl } = useContext(DatabaseContext);
  const { id } = useParams();

  const [proposals, setProposals] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateNewProposal = async (name) => {
    try {
      const response = await axios.post(
        `${databaseUrl}/api/editor/newproposal`,
        {
          email: user.email,
          id: user.id,
          workspace_id: id,
          name: name,
          settings: {
            heading: "Arieal",
            body: "Arieal",
            header: false,
            footer: false,
            theme: 0,
          },
        }
      );
      navigate(`/editor/${response.data._id}`);
    } catch (error) {
      console.error("Error creating proposal:", error);
      setErrorMessage("Failed to create a new proposal. Please try again.");
    }
  };

  useEffect(() => {
    getAllProposals();
  }, [id]); // Re-run if `id` changes

  const getAllProposals = async () => {
    try {
      const response = await axios.get(
        `${databaseUrl}/api/editor/getproposal`,
        {
          params: { workspace_id: id },
        }
      );
      console.log(response);
      setProposals(response.data);
    } catch (error) {
      console.error("Error fetching proposals:", error);
      setErrorMessage("Failed to fetch proposals. Please try again.");
    }
  };

  return (
    <div>
      {popup && (
        <NewProposal
          setPopup={setPopup}
          handleCreateNewProposal={handleCreateNewProposal}
        />
      )}
      <button
        onClick={() => setPopup(true)}
        className="bg-gradient-to-b from-blue-500 to-blue-700 text-white m-4 p-3 rounded-md flex shadow-lg"
      >
        Create Proposal
      </button>
      <div>
        <h2 className="text-lg font-bold">Proposals</h2>
        {proposals.length === 0 ? (
          <p>No proposals found.</p>
        ) : (
          <ul className="list-disc ml-4">
            {proposals.map((proposal) => (
              <li
                onClick={() => navigate(`/editor/${proposal._id}`)}
                key={proposal._id}
              >
                {proposal.proposalName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DashboardFirst;
