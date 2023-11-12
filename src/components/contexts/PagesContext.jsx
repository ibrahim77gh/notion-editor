import React, { createContext, useContext, useState } from 'react';

const PagesContext = createContext();

export const PagesProvider = ({ children }) => {
  const [allPages, setAllPages] = useState([]);

  return (
    <PagesContext.Provider value={{ allPages, setAllPages }}>
      {children}
    </PagesContext.Provider>
  );
};

export const usePages = () => {
  return useContext(PagesContext);
};
