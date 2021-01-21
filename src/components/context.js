import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const toggleSideBar = () => setSideBarOpen(!sideBarOpen);
  const [showDrop, setShowDrop] = useState(false);
  const makeShowDropVisible = () => setShowDrop(true);
  const hideDropBox = () => setShowDrop(false);
  return (
    <AppContext.Provider
      value={{
        sideBarOpen,
        toggleSideBar,
        showDrop,
        makeShowDropVisible,
        hideDropBox,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

// custom hook to consume data
export const useGlobalContext = () => {
  return useContext(AppContext);
};
