import React from "react";
import { ThemeProvider } from "./ThemeContext";
import SearchMovies from "/Users/Jacob/OneDrive/Projects/Latenight Watchers/components/searchMovies";
import DarkModeToggle from "./DarkModeToggle";
import "./styles/darkMode.css";

/**
 * Main App component
 *
 * Wraps the application with ThemeProvider for dark mode functionality
 * Includes the DarkModeToggle and SearchMovies components
 */
function App() {
  return (
    <ThemeProvider>
      <div className="container">
        <header>
          <h1 className="title">Movie Search App</h1>
          <DarkModeToggle />
        </header>
        <main>
          <SearchMovies />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
