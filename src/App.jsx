
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import SearchMovies from "/Users/Jacob/OneDrive/Projects/Latenight Watchers/components/searchMovies";
import ThemeToggle from './DarkModeToggle'; // You could rename this file to ThemeToggle.js
import './styles/darkMode.css';
import './styles/lightMode.css';

/**
 * Main App component
 * 
 * Wraps the application with ThemeProvider for theme functionality
 * Includes the ThemeToggle and SearchMovies components
 */
function App() {
  return (
    <ThemeProvider>
      <div className="container">
        <header>
          <h1 className="title">Movie Search App</h1>
          <ThemeToggle />
        </header>
        <main>
          <SearchMovies />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;