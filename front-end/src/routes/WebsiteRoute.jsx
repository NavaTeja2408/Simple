import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/website/Home";
import Signup from "../pages/website/Signup";
import Pricing from "../pages/website/Pricing";
import Template from "../pages/website/Template";
import ContactUs from "../pages/website/ContactUs";
import Login from "../pages/website/Login.jsx";
import DropCanvas from "../pages/Editor/DropCanvas";
import EditorDnD from "../pages/Editor/EditorDnD.jsx";
import DashboardFirst from "../pages/Dashboard/DashboardFirst.jsx";
import AllWorkspace from "../pages/Dashboard/AllWorkspace.jsx";
import Preview from "../pages/Editor/Preview.jsx";

const WebsiteRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/template" element={<Template />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route
          path="/editor/:id"
          element={
            <div className="w-full h-screen overflow-y-hidden">
              <EditorDnD />
            </div>
          }
        />
        <Route path="/view/:id" element={<Preview />} />

        <Route path="/workspaces" element={<AllWorkspace />} />
        <Route path="/workspace/:id" element={<DashboardFirst />} />
      </Routes>
    </>
  );
};

export default WebsiteRoute;
