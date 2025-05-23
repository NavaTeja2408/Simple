import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import DashboardHome from "../pages/Dashboard/DashboardHome.jsx";
import DashboardDrafts from "../pages/Dashboard/DashboardDrafts.jsx";
import DashboardRecycle from "../pages/Dashboard/DashboardRecycle.jsx";
import DashboardProposals from "../pages/Dashboard/DashboardProposals.jsx";
import DashboardAnalytics from "../pages/Dashboard/DashboardAnalytics.jsx";
import Profile from "../pages/Dashboard/Profile.jsx";
import Subscription from "../pages/Dashboard/Subscription.jsx";
import GeneralSettings from "../pages/Dashboard/GeneralSettings.jsx";
import ManageUsers from "../pages/Dashboard/ManageUsers.jsx";
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
        <Route
          path="/home"
          element={
            <Dashboard>
              {" "}
              <DashboardHome />{" "}
            </Dashboard>
          }
        />
        <Route
          path="/drafts"
          element={
            <Dashboard>
              <DashboardDrafts />
            </Dashboard>
          }
        />
        <Route
          path="/recycle"
          element={
            <Dashboard>
              <DashboardRecycle />
            </Dashboard>
          }
        />
        <Route
          path="/proposals"
          element={
            <Dashboard>
              <DashboardProposals />
            </Dashboard>
          }
        />
        <Route path="/view/:id" element={<Preview />} />
        <Route
          path="/workspaces"
          element={
            <Dashboard>
              <AllWorkspace />
            </Dashboard>
          }
        />

        <Route
          path="/workspace/:id"
          element={
            <Dashboard>
              <DashboardFirst />
            </Dashboard>
          }
        />
        <Route
          path="/analytics/:id"
          element={
            <Dashboard>
              <DashboardAnalytics />
            </Dashboard>
          }
        />
        <Route
          path="profile"
          element={
            <Dashboard>
              <Profile />
            </Dashboard>
          }
        />
        <Route
          path="subscription"
          element={
            <Dashboard>
              <Subscription />
            </Dashboard>
          }
        />
        <Route
          path="settings"
          element={
            <Dashboard>
              <GeneralSettings />
            </Dashboard>
          }
        />
        <Route
          path="manage"
          element={
            <Dashboard>
              <ManageUsers />
            </Dashboard>
          }
        />
      </Routes>
    </>
  );
};

export default WebsiteRoute;
