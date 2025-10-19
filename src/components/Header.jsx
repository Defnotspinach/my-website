import '../styles/header.css';

const Header = () => {
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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
