import { useState, useEffect } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo" aria-label="Home" onClick={closeMenu}>
          <span className="logo-mark">&#9670;</span>
          <span className="logo-text">Shamil</span>
        </a>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#industry-exposure" onClick={closeMenu}>Industry Exposure</a>
          <a href="#leadership" onClick={closeMenu}>Leadership</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#research" onClick={closeMenu}>Research</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a 
            href="https://drive.google.com/file/d/1784GdBJ3y_79i3cvJ0eSlzd8EN1eVM27/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav-download"
            onClick={closeMenu}
          >
            Download CV
          </a>
        </div>
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IconX size={32} stroke={1} /> : <IconMenu2 size={32} stroke={1} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
