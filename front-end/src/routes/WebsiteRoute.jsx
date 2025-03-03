import React from "react";
import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("../pages/website/Home"));
const Signup = React.lazy(() => import("../pages/website/Signup"));
const Pricing = React.lazy(() => import("../pages/website/Pricing"));
const Template = React.lazy(() => import("../pages/website/Template"));
const ContactUs = React.lazy(() => import("../pages/website/ContactUs"));
const Login = React.lazy(() => import("../pages/website/Login.jsx"));
const EditorDnD = React.lazy(() => import("../pages/Editor/EditorDnD.jsx"));
const DashboardFirst = React.lazy(() =>
  import("../pages/Dashboard/DashboardFirst.jsx")
);
const AllWorkspace = React.lazy(() =>
  import("../pages/Dashboard/AllWorkspace.jsx")
);
const Preview = React.lazy(() => import("../pages/Editor/Preview.jsx"));

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
