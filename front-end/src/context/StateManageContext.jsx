import { createContext, useContext, useState } from "react";

export const StateManageContext = createContext({});

export function StateManageContextProvider({ children }) {
  const [costModule, setCostModeule] = useState(false);
  const [sign, setSign] = useState(false);
  const [priceTerms, setPriceTerms] = useState(false);
  const [signEdit, setSignEdit] = useState(null);
  const [costModuleEdit, setCostMouleEdit] = useState(null);
  const [priceTermsEdit, setPriceTermsEdit] = useState(null);

  return (
    <StateManageContext.Provider
      value={{
        costModule,
        setCostModeule,
        sign,
        setSign,
        priceTerms,
        setPriceTerms,
        signEdit,
        setSignEdit,
        costModuleEdit,
        setCostMouleEdit,
        priceTermsEdit,
        setPriceTermsEdit,
      }}
    >
      {children}
    </StateManageContext.Provider>
  );
}
