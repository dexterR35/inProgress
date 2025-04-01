import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import data from '../data.json'; // Import your JSON data (or fetch data from API)

const DataContext = createContext();

// DataProvider component
export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);  // Initially null

  useEffect(() => {
    // Simulate data fetching or loading from an API
    setUserData(data.user);  // Set the data once it's fetched
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({ userData }), [userData]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the data context
export const useDataContext = () => useContext(DataContext);
