import { HashLink } from "react-router-hash-link";
import "./Header.scss"
import { useState } from "react";

function Header() {

    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <header>
             <h1 className="mainlogo">Joëlle Thomas-Pflieger</h1>
             <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
                <ul className="navbar__menu">
                    <li className="navbar__item"><HashLink smooth to="/#about" onClick={handleShowLinks}>À propos</HashLink></li>
                    <li className="navbar__item"><HashLink smooth to="/#skills" onClick={handleShowLinks}>Compétences</HashLink></li>
                    <li className="navbar__item"><HashLink smooth to="/#projects" onClick={handleShowLinks}>Projets</HashLink></li>
                    <li className="navbar__item"><HashLink smooth to="/#formation" onClick={handleShowLinks}>Formation</HashLink></li>
                    <li className="navbar__item"><HashLink smooth to="/services/#services" onClick={handleShowLinks}>Services</HashLink></li>
                    <li className="navbar__item"><HashLink smooth to="/services/#contact" onClick={handleShowLinks}>Contact</HashLink></li>
                </ul>
                <button className="navbar__burger" onClick={handleShowLinks}>
                    <span className="burger__bar"></span>
                </button>
            </nav>
        </header>
    )
}

export default Header