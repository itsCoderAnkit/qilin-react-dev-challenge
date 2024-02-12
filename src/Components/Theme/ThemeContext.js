import React, { useState, createContext, useContext } from 'react';


//context created
const ThemeContext = createContext();


//custom Hook "useTheme"
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};


//providing values to context provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = { theme, switchTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};