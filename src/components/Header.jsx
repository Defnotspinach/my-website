import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import '../styles/header.css';

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header>
      <nav>
        <div>
          <h1>Marc Aedrian</h1>
          <div className="nav-container">
            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {darkMode ? (
                <i className="fas fa-sun" title="Switch to Light Mode"></i>
              ) : (
                <i className="fas fa-moon" title="Switch to Dark Mode"></i>
              )}
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
