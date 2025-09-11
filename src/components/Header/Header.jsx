import { HashLink } from "react-router-hash-link";
import "./Header.scss"
import { useState } from "react";
import { navbarItem } from "../../data/data"

function Header() {

    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <header>
             <p className="mainlogo">Joëlle Thomas-Pflieger</p>
             <nav className={`navbar ${showLinks ? "navbar--open" : ""}`}>
                <ul className="navbar__menu">
                    {navbarItem.map((item, index) => (
                        <li className="navbar__item" key={index}>
                            <HashLink smooth to={`${item.page === "Accueil" ? "" : "/" + item.page}/#${item.link}`}  onClick={handleShowLinks}>{item.title}</HashLink>
                        </li>
                    ))}
                </ul>
                <button className="navbar__burger" onClick={handleShowLinks} aria-label="Ouvrir/Fermer le menu de navigation">
                    <span className="burger__bar"></span>
                </button>
            </nav>
        </header>
    )
}

export default Header