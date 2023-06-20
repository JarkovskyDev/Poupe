import { useRef, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { BsFacebook, BsInstagram } from "react-icons/bs";

function Navbar() {
  const navRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeNavbar = () => { // Zavřít menu po kliknutí na položku
    setIsMenuOpen(false);
  };

  const toggleNavbar = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header>
      <div className="navbar__wrapper">
        <nav ref={navRef} className={isMenuOpen ? "navbar__responsive_nav" : ""}>
          <a href="/">
            <img src={logo} alt="Logo květinového ateliéru Poupě" srcset="" className="navbar__logo" />
          </a>
          <ul>
            <li><Link to="hero" spy={true} smooth={true} offset={0} duration={500} onClick={closeNavbar}>Úvod</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={0} duration={500} onClick={closeNavbar}>Nabízím</Link></li>
            <li><Link to="footer" spy={true} smooth={true} offset={0} duration={500} onClick={closeNavbar}>Kontakt</Link></li>
            <li><a rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100054415962181" target="_blank"><BsFacebook /></a></li>
            <li><a rel="noopener noreferrer" href="https://www.instagram.com/kvetinovy_atelier_poupe/" target="_blank"><BsInstagram /></a></li>
            <li><button className="navbar__nav-btn navbar__nav-close-btn" onClick={closeNavbar}><FaTimes /></button></li>
          </ul>
        </nav>
        <button className="navbar__nav-btn" onClick={toggleNavbar}><FaBars /></button>
      </div>
    </header>
  );
}

export default Navbar;