import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// Initialize theme
const initializeTheme = () => {
  // Check if theme was previously set
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    return savedTheme === 'dark';
  }
  
  // Check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  return prefersDark;
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(initializeTheme);

  useEffect(() => {
    // Update localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    // Set theme on root element only
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};