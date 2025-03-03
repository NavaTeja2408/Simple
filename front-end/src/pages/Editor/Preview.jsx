import React, { useContext, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropCanvas from "./DropCanvas";
import axios from "axios";
import { DatabaseContext } from "../../context/DatabaseContext";
import { useParams } from "react-router-dom";
import GeneratePDF from "./GeneratePDF";

const Preview = () => {
  const { databaseUrl } = useContext(DatabaseContext);
  const { id } = useParams();
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    getProposal();
  }, []);

  const handleGeneratePdf = () => {
    GeneratePDF(data);
  };

  const getProposal = async () => {
    try {
      await axios
        .get(`${databaseUrl}/api/editor/getsingle`, {
          params: { id: id }, // Pass parameters correctly
        })
        .then((res) => {
          setRows(res.data.data);
          setData(res.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen overflow-auto">
      <DndProvider backend={HTML5Backend}>
        <div className=" flex w-full  overflow-auto border-4 border-gray-300">
          <DropCanvas preview={true} rows={rows} setRows={setRows} />
        </div>
        <button onClick={handleGeneratePdf}>Generate Pdf</button>
      </DndProvider>
    </div>
  );
};

export default Preview;
