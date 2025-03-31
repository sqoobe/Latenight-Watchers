import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

/**
 * Theme Toggle component
 * 
 * A button that toggles between dark and light mode
 * Uses ThemeContext to access the current theme state
 */
function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default ThemeToggle;