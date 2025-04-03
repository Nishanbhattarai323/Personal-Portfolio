// src/components/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check localStorage for theme preference and default to 'light' if not found
  const storedTheme = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedTheme ? JSON.parse(storedTheme) : false);

  useEffect(() => {
    // Store theme preference in localStorage whenever it changes
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
