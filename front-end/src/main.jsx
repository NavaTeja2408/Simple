import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DatabaseContextProvider } from "./context/DatabaseContext.jsx";
import { UserContext, UserContextProvider } from "./context/UserContext.jsx";
import { StateManageContextProvider } from "./context/StateManageContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <UserContextProvider>
      <DatabaseContextProvider>
        <StateManageContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StateManageContextProvider>
      </DatabaseContextProvider>
    </UserContextProvider>
  </>
);
