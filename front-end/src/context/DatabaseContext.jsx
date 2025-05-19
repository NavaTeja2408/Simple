import React, { createContext, useContext } from "react";

export const DatabaseContext = createContext({});

export function DatabaseContextProvider({ children }) {
  const databaseUrl = "hhttps://simple-jet-eta.vercel.app";

  return (
    <DatabaseContext.Provider
      value={{
        databaseUrl,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
}
