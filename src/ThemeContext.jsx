import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ThemeContext = createContext();

/**
 * ThemeProvider component that manages theme state
 * 
 * Provides theme state and toggle functionality to all child components
 * Also persists theme preference in localStorage
 */
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Check for saved preference on component mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    
    // Apply appropriate mode class
    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, []);
  
  // Toggle theme function
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Toggle classes
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    
    // Save preference
    localStorage.setItem('darkMode', newDarkMode);
  };
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};