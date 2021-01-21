import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // state for sidebar
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const toggleSideBar = () => setSideBarOpen(!sideBarOpen);

  // state for social drop menu
  const [showDrop, setShowDrop] = useState(false);
  const makeShowDropVisible = () => setShowDrop(true);
  const hideDropBox = () => setShowDrop(false);

  // state for social modal
  const [showModal, setShowModal] = useState(false);
  const toggleModalView = () => {
    return setShowModal(!showModal);
  };

  return (
    <AppContext.Provider
      value={{
        sideBarOpen,
        toggleSideBar,
        showDrop,
        makeShowDropVisible,
        hideDropBox,
        showModal,
        toggleModalView,
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
