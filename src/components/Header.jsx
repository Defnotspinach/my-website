import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="header-content">
          <div className="name-container">
            <div className="photo-placeholder"></div>
            <h1>Marc Aedrian</h1>
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
